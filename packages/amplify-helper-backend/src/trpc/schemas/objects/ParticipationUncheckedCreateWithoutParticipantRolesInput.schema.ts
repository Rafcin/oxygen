import { z } from 'zod'
import { AnswerUncheckedCreateNestedOneWithoutParticipationInputObjectSchema } from './AnswerUncheckedCreateNestedOneWithoutParticipationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUncheckedCreateWithoutParticipantRolesInput> =
  z
    .object({
      id: z.string().optional(),
      questionId: z.string(),
      participantId: z.string(),
      answer: z
        .lazy(
          () => AnswerUncheckedCreateNestedOneWithoutParticipationInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const ParticipationUncheckedCreateWithoutParticipantRolesInputObjectSchema =
  Schema
