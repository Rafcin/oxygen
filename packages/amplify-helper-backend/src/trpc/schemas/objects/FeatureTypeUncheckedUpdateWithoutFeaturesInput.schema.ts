import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeUncheckedUpdateWithoutFeaturesInput> = z
  .object({
    code: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const FeatureTypeUncheckedUpdateWithoutFeaturesInputObjectSchema = Schema