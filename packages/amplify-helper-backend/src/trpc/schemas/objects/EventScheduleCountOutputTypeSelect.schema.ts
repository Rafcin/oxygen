import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleCountOutputTypeSelect> = z
  .object({
    event: z.boolean().optional(),
  })
  .strict()

export const EventScheduleCountOutputTypeSelectObjectSchema = Schema
