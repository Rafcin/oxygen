import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AccountUpdateOneWithoutDiscordUserNestedInputObjectSchema } from './AccountUpdateOneWithoutDiscordUserNestedInput.schema'
import { ParticipationUpdateManyWithoutParticipantNestedInputObjectSchema } from './ParticipationUpdateManyWithoutParticipantNestedInput.schema'
import { DiscordEventAttendeeUpdateManyWithoutMemberNestedInputObjectSchema } from './DiscordEventAttendeeUpdateManyWithoutMemberNestedInput.schema'
import { DiscordEventUpdateManyWithoutCreatedByNestedInputObjectSchema } from './DiscordEventUpdateManyWithoutCreatedByNestedInput.schema'
import { EventScheduleUpdateManyWithoutCreatedByNestedInputObjectSchema } from './EventScheduleUpdateManyWithoutCreatedByNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUpdateWithoutAnswersInput> = z
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
    attended: z
      .lazy(() => DiscordEventAttendeeUpdateManyWithoutMemberNestedInputObjectSchema)
      .optional(),
    createdEvents: z
      .lazy(() => DiscordEventUpdateManyWithoutCreatedByNestedInputObjectSchema)
      .optional(),
    createdSchedules: z
      .lazy(() => EventScheduleUpdateManyWithoutCreatedByNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordUserUpdateWithoutAnswersInputObjectSchema = Schema
