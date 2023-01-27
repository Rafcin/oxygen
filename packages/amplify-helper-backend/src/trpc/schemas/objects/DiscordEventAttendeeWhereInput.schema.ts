import { z } from 'zod'
import { DiscordEventRelationFilterObjectSchema } from './DiscordEventRelationFilter.schema'
import { DiscordEventWhereInputObjectSchema } from './DiscordEventWhereInput.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DiscordUserRelationFilterObjectSchema } from './DiscordUserRelationFilter.schema'
import { DiscordUserWhereInputObjectSchema } from './DiscordUserWhereInput.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiscordEventAttendeeWhereInputObjectSchema),
        z.lazy(() => DiscordEventAttendeeWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiscordEventAttendeeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiscordEventAttendeeWhereInputObjectSchema),
        z.lazy(() => DiscordEventAttendeeWhereInputObjectSchema).array(),
      ])
      .optional(),
    event: z
      .union([
        z.lazy(() => DiscordEventRelationFilterObjectSchema),
        z.lazy(() => DiscordEventWhereInputObjectSchema),
      ])
      .optional(),
    eventId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    member: z
      .union([
        z.lazy(() => DiscordUserRelationFilterObjectSchema),
        z.lazy(() => DiscordUserWhereInputObjectSchema),
      ])
      .optional(),
    memberId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    time: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
  })
  .strict()

export const DiscordEventAttendeeWhereInputObjectSchema = Schema
