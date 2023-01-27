import { z } from 'zod'
import { QuestionCreateNestedOneWithoutParticipationInputObjectSchema } from './QuestionCreateNestedOneWithoutParticipationInput.schema'
import { DiscordUserCreateNestedOneWithoutParticipationsInputObjectSchema } from './DiscordUserCreateNestedOneWithoutParticipationsInput.schema'
import { AnswerCreateNestedOneWithoutParticipationInputObjectSchema } from './AnswerCreateNestedOneWithoutParticipationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateWithoutParticipantRolesInput> = z
  .object({
    id: z.string().optional(),
    question: z.lazy(
      () => QuestionCreateNestedOneWithoutParticipationInputObjectSchema
    ),
    participant: z.lazy(
      () => DiscordUserCreateNestedOneWithoutParticipationsInputObjectSchema
    ),
    answer: z
      .lazy(() => AnswerCreateNestedOneWithoutParticipationInputObjectSchema)
      .optional(),
  })
  .strict()

export const ParticipationCreateWithoutParticipantRolesInputObjectSchema = Schema
