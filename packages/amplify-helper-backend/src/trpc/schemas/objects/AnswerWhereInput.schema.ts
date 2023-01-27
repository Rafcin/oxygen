import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DiscordUserRelationFilterObjectSchema } from './DiscordUserRelationFilter.schema'
import { DiscordUserWhereInputObjectSchema } from './DiscordUserWhereInput.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { QuestionRelationFilterObjectSchema } from './QuestionRelationFilter.schema'
import { QuestionWhereInputObjectSchema } from './QuestionWhereInput.schema'
import { ParticipationRelationFilterObjectSchema } from './ParticipationRelationFilter.schema'
import { ParticipationWhereInputObjectSchema } from './ParticipationWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AnswerWhereInputObjectSchema),
        z.lazy(() => AnswerWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AnswerWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AnswerWhereInputObjectSchema),
        z.lazy(() => AnswerWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    selectedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    selectedBy: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    owner: z
      .union([
        z.lazy(() => DiscordUserRelationFilterObjectSchema),
        z.lazy(() => DiscordUserWhereInputObjectSchema),
      ])
      .optional(),
    ownerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    content: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    question: z
      .union([
        z.lazy(() => QuestionRelationFilterObjectSchema),
        z.lazy(() => QuestionWhereInputObjectSchema),
      ])
      .optional(),
    questionId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    participation: z
      .union([
        z.lazy(() => ParticipationRelationFilterObjectSchema),
        z.lazy(() => ParticipationWhereInputObjectSchema),
      ])
      .optional(),
    participationId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const AnswerWhereInputObjectSchema = Schema
