import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { AnswerRelationFilterObjectSchema } from './AnswerRelationFilter.schema'
import { AnswerWhereInputObjectSchema } from './AnswerWhereInput.schema'
import { GuildRelationFilterObjectSchema } from './GuildRelationFilter.schema'
import { GuildWhereInputObjectSchema } from './GuildWhereInput.schema'
import { GitHubDiscussionRelationFilterObjectSchema } from './GitHubDiscussionRelationFilter.schema'
import { GitHubDiscussionWhereInputObjectSchema } from './GitHubDiscussionWhereInput.schema'
import { ParticipationListRelationFilterObjectSchema } from './ParticipationListRelationFilter.schema'
import { QuestionTagRelationFilterObjectSchema } from './QuestionTagRelationFilter.schema'
import { QuestionTagWhereInputObjectSchema } from './QuestionTagWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuestionWhereInputObjectSchema),
        z.lazy(() => QuestionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuestionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuestionWhereInputObjectSchema),
        z.lazy(() => QuestionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    threadId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    ownerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    channelName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    threadMetaUpdatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    isSolved: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    answer: z
      .union([
        z.lazy(() => AnswerRelationFilterObjectSchema),
        z.lazy(() => AnswerWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    guild: z
      .union([
        z.lazy(() => GuildRelationFilterObjectSchema),
        z.lazy(() => GuildWhereInputObjectSchema),
      ])
      .optional(),
    guildId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    githubDiscussion: z
      .union([
        z.lazy(() => GitHubDiscussionRelationFilterObjectSchema),
        z.lazy(() => GitHubDiscussionWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    githubDiscussionId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    participation: z
      .lazy(() => ParticipationListRelationFilterObjectSchema)
      .optional(),
    tags: z
      .union([
        z.lazy(() => QuestionTagRelationFilterObjectSchema),
        z.lazy(() => QuestionTagWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    tagId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const QuestionWhereInputObjectSchema = Schema
