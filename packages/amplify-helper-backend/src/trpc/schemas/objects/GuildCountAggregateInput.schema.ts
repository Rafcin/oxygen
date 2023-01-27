import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const GuildCountAggregateInputObjectSchema = Schema
