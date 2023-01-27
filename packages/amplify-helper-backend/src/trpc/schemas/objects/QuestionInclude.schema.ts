import { z } from 'zod'
import { AnswerArgsObjectSchema } from './AnswerArgs.schema'
import { GuildArgsObjectSchema } from './GuildArgs.schema'
import { GitHubDiscussionArgsObjectSchema } from './GitHubDiscussionArgs.schema'
import { ParticipationFindManySchema } from '../findManyParticipation.schema'
import { QuestionTagArgsObjectSchema } from './QuestionTagArgs.schema'
import { QuestionCountOutputTypeArgsObjectSchema } from './QuestionCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionInclude> = z
  .object({
    answer: z.union([z.boolean(), z.lazy(() => AnswerArgsObjectSchema)]).optional(),
    guild: z.union([z.boolean(), z.lazy(() => GuildArgsObjectSchema)]).optional(),
    githubDiscussion: z
      .union([z.boolean(), z.lazy(() => GitHubDiscussionArgsObjectSchema)])
      .optional(),
    participation: z
      .union([z.boolean(), z.lazy(() => ParticipationFindManySchema)])
      .optional(),
    tags: z
      .union([z.boolean(), z.lazy(() => QuestionTagArgsObjectSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => QuestionCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const QuestionIncludeObjectSchema = Schema
