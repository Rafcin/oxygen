import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { QuestionRelationFilterObjectSchema } from './QuestionRelationFilter.schema'
import { QuestionWhereInputObjectSchema } from './QuestionWhereInput.schema'
import { DiscordUserRelationFilterObjectSchema } from './DiscordUserRelationFilter.schema'
import { DiscordUserWhereInputObjectSchema } from './DiscordUserWhereInput.schema'
import { DiscordRoleListRelationFilterObjectSchema } from './DiscordRoleListRelationFilter.schema'
import { AnswerRelationFilterObjectSchema } from './AnswerRelationFilter.schema'
import { AnswerWhereInputObjectSchema } from './AnswerWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ParticipationWhereInputObjectSchema),
        z.lazy(() => ParticipationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ParticipationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ParticipationWhereInputObjectSchema),
        z.lazy(() => ParticipationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    question: z
      .union([
        z.lazy(() => QuestionRelationFilterObjectSchema),
        z.lazy(() => QuestionWhereInputObjectSchema),
      ])
      .optional(),
    questionId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    participant: z
      .union([
        z.lazy(() => DiscordUserRelationFilterObjectSchema),
        z.lazy(() => DiscordUserWhereInputObjectSchema),
      ])
      .optional(),
    participantId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    participantRoles: z
      .lazy(() => DiscordRoleListRelationFilterObjectSchema)
      .optional(),
    answer: z
      .union([
        z.lazy(() => AnswerRelationFilterObjectSchema),
        z.lazy(() => AnswerWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export const ParticipationWhereInputObjectSchema = Schema
