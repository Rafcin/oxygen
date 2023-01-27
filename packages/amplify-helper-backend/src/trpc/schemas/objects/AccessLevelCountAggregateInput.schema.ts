import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelCountAggregateInputType> = z
  .object({
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const AccessLevelCountAggregateInputObjectSchema = Schema
