import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { FeatureUpdateManyWithoutTypeNestedInputObjectSchema } from './FeatureUpdateManyWithoutTypeNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeUpdateInput> = z
  .object({
    code: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    features: z
      .lazy(() => FeatureUpdateManyWithoutTypeNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const FeatureTypeUpdateInputObjectSchema = Schema
