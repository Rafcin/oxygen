import { z } from 'zod'
import { AnswerUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './AnswerUncheckedCreateNestedManyWithoutOwnerInput.schema'
import { DiscordEventAttendeeUncheckedCreateNestedManyWithoutMemberInputObjectSchema } from './DiscordEventAttendeeUncheckedCreateNestedManyWithoutMemberInput.schema'
import { DiscordEventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './DiscordEventUncheckedCreateNestedManyWithoutCreatedByInput.schema'
import { EventScheduleUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './EventScheduleUncheckedCreateNestedManyWithoutCreatedByInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUncheckedCreateWithoutParticipationsInput> =
  z
    .object({
      id: z.string(),
      accountId: z.string().optional().nullable(),
      answers: z
        .lazy(() => AnswerUncheckedCreateNestedManyWithoutOwnerInputObjectSchema)
        .optional(),
      attended: z
        .lazy(
          () =>
            DiscordEventAttendeeUncheckedCreateNestedManyWithoutMemberInputObjectSchema
        )
        .optional(),
      createdEvents: z
        .lazy(
          () =>
            DiscordEventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema
        )
        .optional(),
      createdSchedules: z
        .lazy(
          () =>
            EventScheduleUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const DiscordUserUncheckedCreateWithoutParticipationsInputObjectSchema =
  Schema
