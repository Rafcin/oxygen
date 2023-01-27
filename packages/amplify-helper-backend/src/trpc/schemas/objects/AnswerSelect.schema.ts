import { z } from 'zod'
import { DiscordUserArgsObjectSchema } from './DiscordUserArgs.schema'
import { QuestionArgsObjectSchema } from './QuestionArgs.schema'
import { ParticipationArgsObjectSchema } from './ParticipationArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerSelect> = z
  .object({
    id: z.boolean().optional(),
    selectedAt: z.boolean().optional(),
    selectedBy: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    owner: z
      .union([z.boolean(), z.lazy(() => DiscordUserArgsObjectSchema)])
      .optional(),
    ownerId: z.boolean().optional(),
    content: z.boolean().optional(),
    url: z.boolean().optional(),
    question: z
      .union([z.boolean(), z.lazy(() => QuestionArgsObjectSchema)])
      .optional(),
    questionId: z.boolean().optional(),
    participation: z
      .union([z.boolean(), z.lazy(() => ParticipationArgsObjectSchema)])
      .optional(),
    participationId: z.boolean().optional(),
  })
  .strict()

export const AnswerSelectObjectSchema = Schema
