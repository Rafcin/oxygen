import { z } from 'zod'
import { ParticipationUncheckedCreateNestedManyWithoutQuestionInputObjectSchema } from './ParticipationUncheckedCreateNestedManyWithoutQuestionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionUncheckedCreateWithoutAnswerInput> = z
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
    guildId: z.string(),
    githubDiscussionId: z.string().optional().nullable(),
    participation: z
      .lazy(
        () => ParticipationUncheckedCreateNestedManyWithoutQuestionInputObjectSchema
      )
      .optional(),
    tagId: z.string().optional().nullable(),
  })
  .strict()

export const QuestionUncheckedCreateWithoutAnswerInputObjectSchema = Schema
