import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { AccountRelationFilterObjectSchema } from './AccountRelationFilter.schema'
import { AccountWhereInputObjectSchema } from './AccountWhereInput.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { ParticipationListRelationFilterObjectSchema } from './ParticipationListRelationFilter.schema'
import { AnswerListRelationFilterObjectSchema } from './AnswerListRelationFilter.schema'
import { DiscordEventAttendeeListRelationFilterObjectSchema } from './DiscordEventAttendeeListRelationFilter.schema'
import { DiscordEventListRelationFilterObjectSchema } from './DiscordEventListRelationFilter.schema'
import { EventScheduleListRelationFilterObjectSchema } from './EventScheduleListRelationFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiscordUserWhereInputObjectSchema),
        z.lazy(() => DiscordUserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiscordUserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiscordUserWhereInputObjectSchema),
        z.lazy(() => DiscordUserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    account: z
      .union([
        z.lazy(() => AccountRelationFilterObjectSchema),
        z.lazy(() => AccountWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    accountId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    participations: z
      .lazy(() => ParticipationListRelationFilterObjectSchema)
      .optional(),
    answers: z.lazy(() => AnswerListRelationFilterObjectSchema).optional(),
    attended: z
      .lazy(() => DiscordEventAttendeeListRelationFilterObjectSchema)
      .optional(),
    createdEvents: z
      .lazy(() => DiscordEventListRelationFilterObjectSchema)
      .optional(),
    createdSchedules: z
      .lazy(() => EventScheduleListRelationFilterObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordUserWhereInputObjectSchema = Schema
