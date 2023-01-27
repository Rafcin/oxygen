import { z } from 'zod'
import { AnswerArgsObjectSchema } from './AnswerArgs.schema'
import { GuildArgsObjectSchema } from './GuildArgs.schema'
import { GitHubDiscussionArgsObjectSchema } from './GitHubDiscussionArgs.schema'
import { ParticipationFindManySchema } from '../findManyParticipation.schema'
import { QuestionTagArgsObjectSchema } from './QuestionTagArgs.schema'
import { QuestionCountOutputTypeArgsObjectSchema } from './QuestionCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    threadId: z.boolean().optional(),
    ownerId: z.boolean().optional(),
    channelName: z.boolean().optional(),
    threadMetaUpdatedAt: z.boolean().optional(),
    title: z.boolean().optional(),
    isSolved: z.boolean().optional(),
    url: z.boolean().optional(),
    answer: z.union([z.boolean(), z.lazy(() => AnswerArgsObjectSchema)]).optional(),
    guild: z.union([z.boolean(), z.lazy(() => GuildArgsObjectSchema)]).optional(),
    guildId: z.boolean().optional(),
    githubDiscussion: z
      .union([z.boolean(), z.lazy(() => GitHubDiscussionArgsObjectSchema)])
      .optional(),
    githubDiscussionId: z.boolean().optional(),
    participation: z
      .union([z.boolean(), z.lazy(() => ParticipationFindManySchema)])
      .optional(),
    tags: z
      .union([z.boolean(), z.lazy(() => QuestionTagArgsObjectSchema)])
      .optional(),
    tagId: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => QuestionCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const QuestionSelectObjectSchema = Schema
