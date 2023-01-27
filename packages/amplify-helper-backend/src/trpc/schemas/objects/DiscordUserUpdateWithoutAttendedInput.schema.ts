import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AccountUpdateOneWithoutDiscordUserNestedInputObjectSchema } from './AccountUpdateOneWithoutDiscordUserNestedInput.schema'
import { ParticipationUpdateManyWithoutParticipantNestedInputObjectSchema } from './ParticipationUpdateManyWithoutParticipantNestedInput.schema'
import { AnswerUpdateManyWithoutOwnerNestedInputObjectSchema } from './AnswerUpdateManyWithoutOwnerNestedInput.schema'
import { DiscordEventUpdateManyWithoutCreatedByNestedInputObjectSchema } from './DiscordEventUpdateManyWithoutCreatedByNestedInput.schema'
import { EventScheduleUpdateManyWithoutCreatedByNestedInputObjectSchema } from './EventScheduleUpdateManyWithoutCreatedByNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUpdateWithoutAttendedInput> = z
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
    createdEvents: z
      .lazy(() => DiscordEventUpdateManyWithoutCreatedByNestedInputObjectSchema)
      .optional(),
    createdSchedules: z
      .lazy(() => EventScheduleUpdateManyWithoutCreatedByNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordUserUpdateWithoutAttendedInputObjectSchema = Schema
