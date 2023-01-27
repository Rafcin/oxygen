import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AccountUpdateOneWithoutDiscordUserNestedInputObjectSchema } from './AccountUpdateOneWithoutDiscordUserNestedInput.schema'
import { ParticipationUpdateManyWithoutParticipantNestedInputObjectSchema } from './ParticipationUpdateManyWithoutParticipantNestedInput.schema'
import { AnswerUpdateManyWithoutOwnerNestedInputObjectSchema } from './AnswerUpdateManyWithoutOwnerNestedInput.schema'
import { DiscordEventAttendeeUpdateManyWithoutMemberNestedInputObjectSchema } from './DiscordEventAttendeeUpdateManyWithoutMemberNestedInput.schema'
import { DiscordEventUpdateManyWithoutCreatedByNestedInputObjectSchema } from './DiscordEventUpdateManyWithoutCreatedByNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUpdateWithoutCreatedSchedulesInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    account: z
      .lazy(() => AccountUpdateOneWithoutDiscordUserNestedInputObjectSchema)
      .optional(),
    participations: z
      .lazy(() => ParticipationUpdateManyWithoutParticipantNestedInputObjectSchema)
      .optional(),
    answers: z
      .lazy(() => AnswerUpdateManyWithoutOwnerNestedInputObjectSchema)
      .optional(),
    attended: z
      .lazy(() => DiscordEventAttendeeUpdateManyWithoutMemberNestedInputObjectSchema)
      .optional(),
    createdEvents: z
      .lazy(() => DiscordEventUpdateManyWithoutCreatedByNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordUserUpdateWithoutCreatedSchedulesInputObjectSchema = Schema
