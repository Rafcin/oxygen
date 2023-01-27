import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AnswerUncheckedUpdateOneWithoutParticipationNestedInputObjectSchema } from './AnswerUncheckedUpdateOneWithoutParticipationNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUncheckedUpdateWithoutParticipantRolesInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      questionId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      participantId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      answer: z
        .lazy(
          () => AnswerUncheckedUpdateOneWithoutParticipationNestedInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const ParticipationUncheckedUpdateWithoutParticipantRolesInputObjectSchema =
  Schema
