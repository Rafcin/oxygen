import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { GuildRelationFilterObjectSchema } from './GuildRelationFilter.schema'
import { GuildWhereInputObjectSchema } from './GuildWhereInput.schema'
import { DiscordUserRelationFilterObjectSchema } from './DiscordUserRelationFilter.schema'
import { DiscordUserWhereInputObjectSchema } from './DiscordUserWhereInput.schema'
import { DiscordEventListRelationFilterObjectSchema } from './DiscordEventListRelationFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EventScheduleWhereInputObjectSchema),
        z.lazy(() => EventScheduleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EventScheduleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EventScheduleWhereInputObjectSchema),
        z.lazy(() => EventScheduleWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    guild: z
      .union([
        z.lazy(() => GuildRelationFilterObjectSchema),
        z.lazy(() => GuildWhereInputObjectSchema),
      ])
      .optional(),
    guildId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdBy: z
      .union([
        z.lazy(() => DiscordUserRelationFilterObjectSchema),
        z.lazy(() => DiscordUserWhereInputObjectSchema),
      ])
      .optional(),
    createdById: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    event: z.lazy(() => DiscordEventListRelationFilterObjectSchema).optional(),
    schedule: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const EventScheduleWhereInputObjectSchema = Schema
