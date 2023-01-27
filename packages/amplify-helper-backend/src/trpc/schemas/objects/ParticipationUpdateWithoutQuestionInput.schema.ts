import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DiscordUserUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema } from './DiscordUserUpdateOneRequiredWithoutParticipationsNestedInput.schema'
import { DiscordRoleUpdateManyWithoutParticipationNestedInputObjectSchema } from './DiscordRoleUpdateManyWithoutParticipationNestedInput.schema'
import { AnswerUpdateOneWithoutParticipationNestedInputObjectSchema } from './AnswerUpdateOneWithoutParticipationNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUpdateWithoutQuestionInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    participant: z
      .lazy(
        () =>
          DiscordUserUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema
      )
      .optional(),
    participantRoles: z
      .lazy(() => DiscordRoleUpdateManyWithoutParticipationNestedInputObjectSchema)
      .optional(),
    answer: z
      .lazy(() => AnswerUpdateOneWithoutParticipationNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const ParticipationUpdateWithoutQuestionInputObjectSchema = Schema
