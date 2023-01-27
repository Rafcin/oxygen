import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleCreateManyCreatedByInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    guildId: z.string(),
    schedule: z.string(),
  })
  .strict()

export const EventScheduleCreateManyCreatedByInputObjectSchema = Schema
