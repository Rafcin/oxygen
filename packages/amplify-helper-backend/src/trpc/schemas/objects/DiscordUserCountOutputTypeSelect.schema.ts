import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserCountOutputTypeSelect> = z
  .object({
    participations: z.boolean().optional(),
    answers: z.boolean().optional(),
    attended: z.boolean().optional(),
    createdEvents: z.boolean().optional(),
    createdSchedules: z.boolean().optional(),
  })
  .strict()

export const DiscordUserCountOutputTypeSelectObjectSchema = Schema
