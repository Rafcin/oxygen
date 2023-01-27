import { z } from 'zod'
import { GuildArgsObjectSchema } from './GuildArgs.schema'
import { DiscordUserArgsObjectSchema } from './DiscordUserArgs.schema'
import { DiscordEventFindManySchema } from '../findManyDiscordEvent.schema'
import { EventScheduleCountOutputTypeArgsObjectSchema } from './EventScheduleCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    guild: z.union([z.boolean(), z.lazy(() => GuildArgsObjectSchema)]).optional(),
    guildId: z.boolean().optional(),
    createdBy: z
      .union([z.boolean(), z.lazy(() => DiscordUserArgsObjectSchema)])
      .optional(),
    createdById: z.boolean().optional(),
    event: z
      .union([z.boolean(), z.lazy(() => DiscordEventFindManySchema)])
      .optional(),
    schedule: z.boolean().optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => EventScheduleCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EventScheduleSelectObjectSchema = Schema
