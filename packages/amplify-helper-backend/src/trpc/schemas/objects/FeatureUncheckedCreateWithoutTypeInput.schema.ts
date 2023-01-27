import { z } from 'zod'
import { ConfigurationFeatureUncheckedCreateNestedManyWithoutFeatureInputObjectSchema } from './ConfigurationFeatureUncheckedCreateNestedManyWithoutFeatureInput.schema'
import { FeatureInputsUncheckedCreateNestedManyWithoutFeatureInputObjectSchema } from './FeatureInputsUncheckedCreateNestedManyWithoutFeatureInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureUncheckedCreateWithoutTypeInput> = z
  .object({
    code: z.string(),
    name: z.string(),
    description: z.string(),
    configurations: z
      .lazy(
        () =>
          ConfigurationFeatureUncheckedCreateNestedManyWithoutFeatureInputObjectSchema
      )
      .optional(),
    inputs: z
      .lazy(
        () => FeatureInputsUncheckedCreateNestedManyWithoutFeatureInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const FeatureUncheckedCreateWithoutTypeInputObjectSchema = Schema
