import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    accountId: z.literal(true).optional(),
  })
  .strict()

export const DiscordUserMaxAggregateInputObjectSchema = Schema
