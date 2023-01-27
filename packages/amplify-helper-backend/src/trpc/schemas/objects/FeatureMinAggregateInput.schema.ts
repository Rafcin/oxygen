import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureMinAggregateInputType> = z
  .object({
    code: z.literal(true).optional(),
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
    featureTypeCode: z.literal(true).optional(),
  })
  .strict()

export const FeatureMinAggregateInputObjectSchema = Schema
