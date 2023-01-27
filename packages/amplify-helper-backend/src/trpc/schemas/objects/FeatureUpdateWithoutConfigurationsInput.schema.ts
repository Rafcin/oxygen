import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { FeatureTypeUpdateOneRequiredWithoutFeaturesNestedInputObjectSchema } from './FeatureTypeUpdateOneRequiredWithoutFeaturesNestedInput.schema'
import { FeatureInputsUpdateManyWithoutFeatureNestedInputObjectSchema } from './FeatureInputsUpdateManyWithoutFeatureNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureUpdateWithoutConfigurationsInput> = z
  .object({
    code: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .lazy(() => FeatureTypeUpdateOneRequiredWithoutFeaturesNestedInputObjectSchema)
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
    inputs: z
      .lazy(() => FeatureInputsUpdateManyWithoutFeatureNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const FeatureUpdateWithoutConfigurationsInputObjectSchema = Schema
