import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeUncheckedCreateWithoutFeaturesInput> = z
  .object({
    code: z.string(),
  })
  .strict()

export const FeatureTypeUncheckedCreateWithoutFeaturesInputObjectSchema = Schema
