import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { QuestionUpdateOneRequiredWithoutParticipationNestedInputObjectSchema } from './QuestionUpdateOneRequiredWithoutParticipationNestedInput.schema'
import { DiscordUserUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema } from './DiscordUserUpdateOneRequiredWithoutParticipationsNestedInput.schema'
import { DiscordRoleUpdateManyWithoutParticipationNestedInputObjectSchema } from './DiscordRoleUpdateManyWithoutParticipationNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUpdateWithoutAnswerInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    question: z
      .lazy(
        () => QuestionUpdateOneRequiredWithoutParticipationNestedInputObjectSchema
      )
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
  })
  .strict()

export const ParticipationUpdateWithoutAnswerInputObjectSchema = Schema
