import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildCountOutputTypeSelect> = z
  .object({
    questions: z.boolean().optional(),
    EventSchedule: z.boolean().optional(),
  })
  .strict()

export const GuildCountOutputTypeSelectObjectSchema = Schema
