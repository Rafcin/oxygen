import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { FeatureUpdateOneRequiredWithoutConfigurationsNestedInputObjectSchema } from './FeatureUpdateOneRequiredWithoutConfigurationsNestedInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUpdateWithoutConfigurationInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      feature: z
        .lazy(
          () => FeatureUpdateOneRequiredWithoutConfigurationsNestedInputObjectSchema
        )
        .optional(),
      enabled: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const ConfigurationFeatureUpdateWithoutConfigurationInputObjectSchema = Schema
