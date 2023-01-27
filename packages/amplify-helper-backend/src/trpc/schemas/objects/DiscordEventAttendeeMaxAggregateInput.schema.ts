import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeMaxAggregateInputType> = z
  .object({
    eventId: z.literal(true).optional(),
    memberId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    time: z.literal(true).optional(),
  })
  .strict()

export const DiscordEventAttendeeMaxAggregateInputObjectSchema = Schema
