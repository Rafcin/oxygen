import { z } from 'zod'
import { ParticipationUncheckedCreateNestedManyWithoutParticipantInputObjectSchema } from './ParticipationUncheckedCreateNestedManyWithoutParticipantInput.schema'
import { AnswerUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './AnswerUncheckedCreateNestedManyWithoutOwnerInput.schema'
import { DiscordEventAttendeeUncheckedCreateNestedManyWithoutMemberInputObjectSchema } from './DiscordEventAttendeeUncheckedCreateNestedManyWithoutMemberInput.schema'
import { DiscordEventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './DiscordEventUncheckedCreateNestedManyWithoutCreatedByInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUncheckedCreateWithoutCreatedSchedulesInput> =
  z
    .object({
      id: z.string(),
      accountId: z.string().optional().nullable(),
      participations: z
        .lazy(
          () =>
            ParticipationUncheckedCreateNestedManyWithoutParticipantInputObjectSchema
        )
        .optional(),
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
    })
    .strict()

export const DiscordUserUncheckedCreateWithoutCreatedSchedulesInputObjectSchema =
  Schema
