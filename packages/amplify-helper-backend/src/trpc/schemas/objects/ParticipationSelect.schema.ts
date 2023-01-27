import { z } from 'zod'
import { QuestionArgsObjectSchema } from './QuestionArgs.schema'
import { DiscordUserArgsObjectSchema } from './DiscordUserArgs.schema'
import { DiscordRoleFindManySchema } from '../findManyDiscordRole.schema'
import { AnswerArgsObjectSchema } from './AnswerArgs.schema'
import { ParticipationCountOutputTypeArgsObjectSchema } from './ParticipationCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationSelect> = z
  .object({
    id: z.boolean().optional(),
    question: z
      .union([z.boolean(), z.lazy(() => QuestionArgsObjectSchema)])
      .optional(),
    questionId: z.boolean().optional(),
    participant: z
      .union([z.boolean(), z.lazy(() => DiscordUserArgsObjectSchema)])
      .optional(),
    participantId: z.boolean().optional(),
    participantRoles: z
      .union([z.boolean(), z.lazy(() => DiscordRoleFindManySchema)])
      .optional(),
    answer: z.union([z.boolean(), z.lazy(() => AnswerArgsObjectSchema)]).optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ParticipationCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const ParticipationSelectObjectSchema = Schema
