import { z } from 'zod'
import { FeatureInputsUncheckedCreateNestedManyWithoutFeatureInputObjectSchema } from './FeatureInputsUncheckedCreateNestedManyWithoutFeatureInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureUncheckedCreateWithoutConfigurationsInput> = z
  .object({
    code: z.string(),
    name: z.string(),
    description: z.string(),
    inputs: z
      .lazy(
        () => FeatureInputsUncheckedCreateNestedManyWithoutFeatureInputObjectSchema
      )
      .optional(),
    featureTypeCode: z.string(),
  })
  .strict()

export const FeatureUncheckedCreateWithoutConfigurationsInputObjectSchema = Schema
