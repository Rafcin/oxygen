import { z } from 'zod'
import { DiscordUserArgsObjectSchema } from './DiscordUserArgs.schema'
import { EventScheduleArgsObjectSchema } from './EventScheduleArgs.schema'
import { DiscordEventAttendeeFindManySchema } from '../findManyDiscordEventAttendee.schema'
import { DiscordEventCountOutputTypeArgsObjectSchema } from './DiscordEventCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventInclude> = z
  .object({
    createdBy: z
      .union([z.boolean(), z.lazy(() => DiscordUserArgsObjectSchema)])
      .optional(),
    schedule: z
      .union([z.boolean(), z.lazy(() => EventScheduleArgsObjectSchema)])
      .optional(),
    attendees: z
      .union([z.boolean(), z.lazy(() => DiscordEventAttendeeFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => DiscordEventCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const DiscordEventIncludeObjectSchema = Schema
