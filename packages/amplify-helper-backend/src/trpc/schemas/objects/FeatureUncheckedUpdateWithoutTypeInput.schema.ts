import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { ConfigurationFeatureUncheckedUpdateManyWithoutFeatureNestedInputObjectSchema } from './ConfigurationFeatureUncheckedUpdateManyWithoutFeatureNestedInput.schema'
import { FeatureInputsUncheckedUpdateManyWithoutFeatureNestedInputObjectSchema } from './FeatureInputsUncheckedUpdateManyWithoutFeatureNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureUncheckedUpdateWithoutTypeInput> = z
  .object({
    code: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    configurations: z
      .lazy(
        () =>
          ConfigurationFeatureUncheckedUpdateManyWithoutFeatureNestedInputObjectSchema
      )
      .optional(),
    inputs: z
      .lazy(
        () => FeatureInputsUncheckedUpdateManyWithoutFeatureNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const FeatureUncheckedUpdateWithoutTypeInputObjectSchema = Schema
