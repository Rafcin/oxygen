import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DiscordUserRelationFilterObjectSchema } from './DiscordUserRelationFilter.schema'
import { DiscordUserWhereInputObjectSchema } from './DiscordUserWhereInput.schema'
import { EventScheduleRelationFilterObjectSchema } from './EventScheduleRelationFilter.schema'
import { EventScheduleWhereInputObjectSchema } from './EventScheduleWhereInput.schema'
import { DiscordEventAttendeeListRelationFilterObjectSchema } from './DiscordEventAttendeeListRelationFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiscordEventWhereInputObjectSchema),
        z.lazy(() => DiscordEventWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiscordEventWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiscordEventWhereInputObjectSchema),
        z.lazy(() => DiscordEventWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    imageUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    location: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    start: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    createdBy: z
      .union([
        z.lazy(() => DiscordUserRelationFilterObjectSchema),
        z.lazy(() => DiscordUserWhereInputObjectSchema),
      ])
      .optional(),
    createdById: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    schedule: z
      .union([
        z.lazy(() => EventScheduleRelationFilterObjectSchema),
        z.lazy(() => EventScheduleWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    scheduleId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    attendees: z
      .lazy(() => DiscordEventAttendeeListRelationFilterObjectSchema)
      .optional(),
    eventScheduleId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const DiscordEventWhereInputObjectSchema = Schema
