import { z } from 'zod'
import { QuestionCreateNestedOneWithoutParticipationInputObjectSchema } from './QuestionCreateNestedOneWithoutParticipationInput.schema'
import { DiscordRoleCreateNestedManyWithoutParticipationInputObjectSchema } from './DiscordRoleCreateNestedManyWithoutParticipationInput.schema'
import { AnswerCreateNestedOneWithoutParticipationInputObjectSchema } from './AnswerCreateNestedOneWithoutParticipationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateWithoutParticipantInput> = z
  .object({
    id: z.string().optional(),
    question: z.lazy(
      () => QuestionCreateNestedOneWithoutParticipationInputObjectSchema
    ),
    participantRoles: z
      .lazy(() => DiscordRoleCreateNestedManyWithoutParticipationInputObjectSchema)
      .optional(),
    answer: z
      .lazy(() => AnswerCreateNestedOneWithoutParticipationInputObjectSchema)
      .optional(),
  })
  .strict()

export const ParticipationCreateWithoutParticipantInputObjectSchema = Schema
