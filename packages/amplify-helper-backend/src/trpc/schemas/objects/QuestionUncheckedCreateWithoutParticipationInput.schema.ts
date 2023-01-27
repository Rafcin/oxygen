import { z } from 'zod'
import { AnswerUncheckedCreateNestedOneWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateNestedOneWithoutQuestionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionUncheckedCreateWithoutParticipationInput> = z
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
      .lazy(() => AnswerUncheckedCreateNestedOneWithoutQuestionInputObjectSchema)
      .optional(),
    guildId: z.string(),
    githubDiscussionId: z.string().optional().nullable(),
    tagId: z.string().optional().nullable(),
  })
  .strict()

export const QuestionUncheckedCreateWithoutParticipationInputObjectSchema = Schema
