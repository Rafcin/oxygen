import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventCreateManyCreatedByInput> = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    imageUrl: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    start: z.date(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    scheduleId: z.string().optional().nullable(),
    eventScheduleId: z.string(),
  })
  .strict()

export const DiscordEventCreateManyCreatedByInputObjectSchema = Schema
