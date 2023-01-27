import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DiscordRoleUncheckedUpdateManyWithoutParticipationNestedInputObjectSchema } from './DiscordRoleUncheckedUpdateManyWithoutParticipationNestedInput.schema'
import { AnswerUncheckedUpdateOneWithoutParticipationNestedInputObjectSchema } from './AnswerUncheckedUpdateOneWithoutParticipationNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUncheckedUpdateWithoutQuestionInput> = z
  .object({
    id: z
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
    participantRoles: z
      .lazy(
        () =>
          DiscordRoleUncheckedUpdateManyWithoutParticipationNestedInputObjectSchema
      )
      .optional(),
    answer: z
      .lazy(
        () => AnswerUncheckedUpdateOneWithoutParticipationNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const ParticipationUncheckedUpdateWithoutQuestionInputObjectSchema = Schema
