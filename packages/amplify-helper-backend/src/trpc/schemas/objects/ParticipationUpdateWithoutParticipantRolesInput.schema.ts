import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { QuestionUpdateOneRequiredWithoutParticipationNestedInputObjectSchema } from './QuestionUpdateOneRequiredWithoutParticipationNestedInput.schema'
import { DiscordUserUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema } from './DiscordUserUpdateOneRequiredWithoutParticipationsNestedInput.schema'
import { AnswerUpdateOneWithoutParticipationNestedInputObjectSchema } from './AnswerUpdateOneWithoutParticipationNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUpdateWithoutParticipantRolesInput> = z
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
    answer: z
      .lazy(() => AnswerUpdateOneWithoutParticipationNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const ParticipationUpdateWithoutParticipantRolesInputObjectSchema = Schema
