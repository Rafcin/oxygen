import { EnvValue, GeneratorOptions } from '@prisma/generator-helper'
import { getDMMF, parseEnvValue } from '@prisma/internals'
import { promises as fs } from 'fs'
import path from 'path'
import pluralize from 'pluralize'
import { generate as PrismaTrpcShieldGenerator } from 'prisma-trpc-shield-generator/lib/prisma-generator'
import { generate as PrismaZodGenerator } from '@oxygen/trpc-prisma-zod-schema-generator'
import { configSchema } from './config'
import {
  generateBaseRouter,
  generateCreateRouterImport,
  generateProcedure,
  generateRouterImport,
  generateRouterSchemaImports,
  generateShieldImport,
  generatetRPCImport,
  getInputTypeByOpName,
  resolveModelsComments,
} from './helpers'
import { project } from './project'
import removeDir from './utils/removeDir'

export async function generate(options: GeneratorOptions) {
  const outputDir = parseEnvValue(options.generator.output as EnvValue)
  const results = configSchema.safeParse(options.generator.config)
  if (!results.success) throw new Error('Invalid options passed')
  const config = results.data

  await fs.mkdir(outputDir, { recursive: true })
  await removeDir(outputDir, true)

  await PrismaZodGenerator(options)

  if (config.withShield) {
    const shieldOutputPath = path.join(outputDir, './shield')
    await PrismaTrpcShieldGenerator({
      ...options,
      generator: {
        ...options.generator,
        output: {
          ...options.generator.output,
          value: shieldOutputPath,
        },
        config: {
          ...options.generator.config,
          contextPath: config.contextPath,
        },
      },
    })
  }

  const prismaClientProvider = options.otherGenerators.find(
    (it) => parseEnvValue(it.provider) === 'prisma-client-js'
  )

  const dataSource = options.datasources?.[0]

  const prismaClientDmmf = await getDMMF({
    datamodel: options.datamodel,
    previewFeatures: prismaClientProvider.previewFeatures,
  })

  const modelOperations = prismaClientDmmf.mappings.modelOperations
  const models = prismaClientDmmf.datamodel.models
  const hiddenModels: string[] = []
  resolveModelsComments(models, hiddenModels)
  const createRouter = project.createSourceFile(
    path.resolve(outputDir, 'routers', 'helpers', 'createRouter.ts'),
    undefined,
    { overwrite: true }
  )

  generatetRPCImport(createRouter)
  if (config.withShield) {
    generateShieldImport(createRouter, options)
  }

  generateBaseRouter(createRouter, config, options)

  createRouter.formatText({
    indentSize: 2,
  })

  const appRouter = project.createSourceFile(
    path.resolve(outputDir, 'routers', `index.ts`),
    undefined,
    { overwrite: true }
  )

  generateCreateRouterImport({
    sourceFile: appRouter,
  })

  const routerStatements = []

  for (const modelOperation of modelOperations) {
    const { model, ...operations } = modelOperation
    if (hiddenModels.includes(model)) continue
    const plural = pluralize(model.toLowerCase())
    const hasCreateMany = Boolean(operations.createMany)
    generateRouterImport(appRouter, plural, model)
    const modelRouter = project.createSourceFile(
      path.resolve(outputDir, 'routers', `${model}.router.ts`),
      undefined,
      { overwrite: true }
    )

    generateCreateRouterImport({
      sourceFile: modelRouter,
      config,
    })

    generateRouterSchemaImports(
      modelRouter,
      model,
      hasCreateMany,
      dataSource.provider
    )

    modelRouter.addStatements(/* ts */ `
      export const ${plural}Router = t.router({`)
    for (const [opType, opNameWithModel] of Object.entries(operations)) {
      const baseOpType = opType.replace('OrThrow', '')

      generateProcedure(
        modelRouter,
        opNameWithModel,
        getInputTypeByOpName(baseOpType, model),
        model,
        opType,
        baseOpType,
        config
      )
    }

    modelRouter.addStatements(/* ts */ `
    })`)

    modelRouter.formatText({ indentSize: 2 })
    routerStatements.push(/* ts */ `
      ${model.toLowerCase()}: ${plural}Router`)
  }

  appRouter.addStatements(/* ts */ `
    export const appRouter = t.router({${routerStatements}})
    `)

  appRouter.formatText({ indentSize: 2 })
  await project.save()
}
