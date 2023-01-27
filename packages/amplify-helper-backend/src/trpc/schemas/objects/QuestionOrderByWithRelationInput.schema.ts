import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AnswerOrderByWithRelationInputObjectSchema } from './AnswerOrderByWithRelationInput.schema'
import { GuildOrderByWithRelationInputObjectSchema } from './GuildOrderByWithRelationInput.schema'
import { GitHubDiscussionOrderByWithRelationInputObjectSchema } from './GitHubDiscussionOrderByWithRelationInput.schema'
import { ParticipationOrderByRelationAggregateInputObjectSchema } from './ParticipationOrderByRelationAggregateInput.schema'
import { QuestionTagOrderByWithRelationInputObjectSchema } from './QuestionTagOrderByWithRelationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    threadId: z.lazy(() => SortOrderSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    channelName: z.lazy(() => SortOrderSchema).optional(),
    threadMetaUpdatedAt: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    isSolved: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    answer: z.lazy(() => AnswerOrderByWithRelationInputObjectSchema).optional(),
    guild: z.lazy(() => GuildOrderByWithRelationInputObjectSchema).optional(),
    guildId: z.lazy(() => SortOrderSchema).optional(),
    githubDiscussion: z
      .lazy(() => GitHubDiscussionOrderByWithRelationInputObjectSchema)
      .optional(),
    githubDiscussionId: z.lazy(() => SortOrderSchema).optional(),
    participation: z
      .lazy(() => ParticipationOrderByRelationAggregateInputObjectSchema)
      .optional(),
    tags: z.lazy(() => QuestionTagOrderByWithRelationInputObjectSchema).optional(),
    tagId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const QuestionOrderByWithRelationInputObjectSchema = Schema
