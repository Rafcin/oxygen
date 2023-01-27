import { z } from 'zod'
import { FeatureTypeCreateNestedOneWithoutFeaturesInputObjectSchema } from './FeatureTypeCreateNestedOneWithoutFeaturesInput.schema'
import { ConfigurationFeatureCreateNestedManyWithoutFeatureInputObjectSchema } from './ConfigurationFeatureCreateNestedManyWithoutFeatureInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureCreateWithoutInputsInput> = z
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
  })
  .strict()

export const FeatureCreateWithoutInputsInputObjectSchema = Schema
