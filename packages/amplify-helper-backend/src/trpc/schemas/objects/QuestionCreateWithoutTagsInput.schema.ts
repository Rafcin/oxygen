import { z } from 'zod'
import { AnswerCreateNestedOneWithoutQuestionInputObjectSchema } from './AnswerCreateNestedOneWithoutQuestionInput.schema'
import { GuildCreateNestedOneWithoutQuestionsInputObjectSchema } from './GuildCreateNestedOneWithoutQuestionsInput.schema'
import { GitHubDiscussionCreateNestedOneWithoutQuestionInputObjectSchema } from './GitHubDiscussionCreateNestedOneWithoutQuestionInput.schema'
import { ParticipationCreateNestedManyWithoutQuestionInputObjectSchema } from './ParticipationCreateNestedManyWithoutQuestionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionCreateWithoutTagsInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    threadId: z.string(),
    ownerId: z.string(),
    channelName: z.string(),
    threadMetaUpdatedAt: z.date().optional(),
    title: z.string(),
    isSolved: z.boolean().optional(),
    url: z.string().optional().nullable(),
    answer: z
      .lazy(() => AnswerCreateNestedOneWithoutQuestionInputObjectSchema)
      .optional(),
    guild: z.lazy(() => GuildCreateNestedOneWithoutQuestionsInputObjectSchema),
    githubDiscussion: z
      .lazy(() => GitHubDiscussionCreateNestedOneWithoutQuestionInputObjectSchema)
      .optional(),
    participation: z
      .lazy(() => ParticipationCreateNestedManyWithoutQuestionInputObjectSchema)
      .optional(),
  })
  .strict()

export const QuestionCreateWithoutTagsInputObjectSchema = Schema
