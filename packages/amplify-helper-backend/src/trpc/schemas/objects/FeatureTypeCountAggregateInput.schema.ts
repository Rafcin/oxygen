import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeCountAggregateInputType> = z
  .object({
    code: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const FeatureTypeCountAggregateInputObjectSchema = Schema
