import { z } from 'zod'
import { DiscordUserCreateNestedOneWithoutAnswersInputObjectSchema } from './DiscordUserCreateNestedOneWithoutAnswersInput.schema'
import { ParticipationCreateNestedOneWithoutAnswerInputObjectSchema } from './ParticipationCreateNestedOneWithoutAnswerInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerCreateWithoutQuestionInput> = z
  .object({
    id: z.string().optional(),
    selectedAt: z.date().optional(),
    selectedBy: z.string(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    owner: z.lazy(() => DiscordUserCreateNestedOneWithoutAnswersInputObjectSchema),
    content: z.string(),
    url: z.string().optional().nullable(),
    participation: z.lazy(
      () => ParticipationCreateNestedOneWithoutAnswerInputObjectSchema
    ),
  })
  .strict()

export const AnswerCreateWithoutQuestionInputObjectSchema = Schema
