import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeAvgAggregateInputType> = z
  .object({
    time: z.literal(true).optional(),
  })
  .strict()

export const DiscordEventAttendeeAvgAggregateInputObjectSchema = Schema
