import { z } from 'zod'
import { FeatureTypeCreateNestedOneWithoutFeaturesInputObjectSchema } from './FeatureTypeCreateNestedOneWithoutFeaturesInput.schema'
import { FeatureInputsCreateNestedManyWithoutFeatureInputObjectSchema } from './FeatureInputsCreateNestedManyWithoutFeatureInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureCreateWithoutConfigurationsInput> = z
  .object({
    code: z.string(),
    type: z.lazy(() => FeatureTypeCreateNestedOneWithoutFeaturesInputObjectSchema),
    name: z.string(),
    description: z.string(),
    inputs: z
      .lazy(() => FeatureInputsCreateNestedManyWithoutFeatureInputObjectSchema)
      .optional(),
  })
  .strict()

export const FeatureCreateWithoutConfigurationsInputObjectSchema = Schema
