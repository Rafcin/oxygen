import { z } from 'zod'
import { GuildArgsObjectSchema } from './GuildArgs.schema'
import { DiscordUserArgsObjectSchema } from './DiscordUserArgs.schema'
import { DiscordEventFindManySchema } from '../findManyDiscordEvent.schema'
import { EventScheduleCountOutputTypeArgsObjectSchema } from './EventScheduleCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleInclude> = z
  .object({
    guild: z.union([z.boolean(), z.lazy(() => GuildArgsObjectSchema)]).optional(),
    createdBy: z
      .union([z.boolean(), z.lazy(() => DiscordUserArgsObjectSchema)])
      .optional(),
    event: z
      .union([z.boolean(), z.lazy(() => DiscordEventFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => EventScheduleCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EventScheduleIncludeObjectSchema = Schema
