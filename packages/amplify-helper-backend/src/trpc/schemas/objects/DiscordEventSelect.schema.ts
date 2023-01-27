import { z } from 'zod'
import { DiscordUserArgsObjectSchema } from './DiscordUserArgs.schema'
import { EventScheduleArgsObjectSchema } from './EventScheduleArgs.schema'
import { DiscordEventAttendeeFindManySchema } from '../findManyDiscordEventAttendee.schema'
import { DiscordEventCountOutputTypeArgsObjectSchema } from './DiscordEventCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    imageUrl: z.boolean().optional(),
    location: z.boolean().optional(),
    start: z.boolean().optional(),
    createdBy: z
      .union([z.boolean(), z.lazy(() => DiscordUserArgsObjectSchema)])
      .optional(),
    createdById: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    schedule: z
      .union([z.boolean(), z.lazy(() => EventScheduleArgsObjectSchema)])
      .optional(),
    scheduleId: z.boolean().optional(),
    attendees: z
      .union([z.boolean(), z.lazy(() => DiscordEventAttendeeFindManySchema)])
      .optional(),
    eventScheduleId: z.boolean().optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => DiscordEventCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const DiscordEventSelectObjectSchema = Schema
