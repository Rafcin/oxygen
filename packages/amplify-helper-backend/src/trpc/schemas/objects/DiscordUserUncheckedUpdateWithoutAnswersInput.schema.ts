import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { ParticipationUncheckedUpdateManyWithoutParticipantNestedInputObjectSchema } from './ParticipationUncheckedUpdateManyWithoutParticipantNestedInput.schema'
import { DiscordEventAttendeeUncheckedUpdateManyWithoutMemberNestedInputObjectSchema } from './DiscordEventAttendeeUncheckedUpdateManyWithoutMemberNestedInput.schema'
import { DiscordEventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './DiscordEventUncheckedUpdateManyWithoutCreatedByNestedInput.schema'
import { EventScheduleUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './EventScheduleUncheckedUpdateManyWithoutCreatedByNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUncheckedUpdateWithoutAnswersInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    accountId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    participations: z
      .lazy(
        () =>
          ParticipationUncheckedUpdateManyWithoutParticipantNestedInputObjectSchema
      )
      .optional(),
    attended: z
      .lazy(
        () =>
          DiscordEventAttendeeUncheckedUpdateManyWithoutMemberNestedInputObjectSchema
      )
      .optional(),
    createdEvents: z
      .lazy(
        () => DiscordEventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema
      )
      .optional(),
    createdSchedules: z
      .lazy(
        () => EventScheduleUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const DiscordUserUncheckedUpdateWithoutAnswersInputObjectSchema = Schema