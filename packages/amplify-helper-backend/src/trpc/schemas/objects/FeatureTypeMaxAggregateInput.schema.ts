import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeMaxAggregateInputType> = z
  .object({
    code: z.literal(true).optional(),
  })
  .strict()

export const FeatureTypeMaxAggregateInputObjectSchema = Schema
