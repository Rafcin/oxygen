import { z } from 'zod'
import { DiscordUserArgsObjectSchema } from './DiscordUserArgs.schema'
import { QuestionArgsObjectSchema } from './QuestionArgs.schema'
import { ParticipationArgsObjectSchema } from './ParticipationArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerInclude> = z
  .object({
    owner: z
      .union([z.boolean(), z.lazy(() => DiscordUserArgsObjectSchema)])
      .optional(),
    question: z
      .union([z.boolean(), z.lazy(() => QuestionArgsObjectSchema)])
      .optional(),
    participation: z
      .union([z.boolean(), z.lazy(() => ParticipationArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const AnswerIncludeObjectSchema = Schema
