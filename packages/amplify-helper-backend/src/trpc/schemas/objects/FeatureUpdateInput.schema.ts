import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { FeatureTypeUpdateOneRequiredWithoutFeaturesNestedInputObjectSchema } from './FeatureTypeUpdateOneRequiredWithoutFeaturesNestedInput.schema'
import { ConfigurationFeatureUpdateManyWithoutFeatureNestedInputObjectSchema } from './ConfigurationFeatureUpdateManyWithoutFeatureNestedInput.schema'
import { FeatureInputsUpdateManyWithoutFeatureNestedInputObjectSchema } from './FeatureInputsUpdateManyWithoutFeatureNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureUpdateInput> = z
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
    configurations: z
      .lazy(
        () => ConfigurationFeatureUpdateManyWithoutFeatureNestedInputObjectSchema
      )
      .optional(),
    inputs: z
      .lazy(() => FeatureInputsUpdateManyWithoutFeatureNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const FeatureUpdateInputObjectSchema = Schema
