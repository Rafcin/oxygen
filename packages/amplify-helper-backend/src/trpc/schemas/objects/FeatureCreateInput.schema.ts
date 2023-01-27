import { z } from 'zod'
import { FeatureTypeCreateNestedOneWithoutFeaturesInputObjectSchema } from './FeatureTypeCreateNestedOneWithoutFeaturesInput.schema'
import { ConfigurationFeatureCreateNestedManyWithoutFeatureInputObjectSchema } from './ConfigurationFeatureCreateNestedManyWithoutFeatureInput.schema'
import { FeatureInputsCreateNestedManyWithoutFeatureInputObjectSchema } from './FeatureInputsCreateNestedManyWithoutFeatureInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureCreateInput> = z
  .object({
    code: z.string(),
    type: z.lazy(() => FeatureTypeCreateNestedOneWithoutFeaturesInputObjectSchema),
    name: z.string(),
    description: z.string(),
    configurations: z
      .lazy(
        () => ConfigurationFeatureCreateNestedManyWithoutFeatureInputObjectSchema
      )
      .optional(),
    inputs: z
      .lazy(() => FeatureInputsCreateNestedManyWithoutFeatureInputObjectSchema)
      .optional(),
  })
  .strict()

export const FeatureCreateInputObjectSchema = Schema
