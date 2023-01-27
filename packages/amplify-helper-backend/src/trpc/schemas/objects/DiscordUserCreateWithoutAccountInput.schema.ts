import { z } from 'zod'
import { ParticipationCreateNestedManyWithoutParticipantInputObjectSchema } from './ParticipationCreateNestedManyWithoutParticipantInput.schema'
import { AnswerCreateNestedManyWithoutOwnerInputObjectSchema } from './AnswerCreateNestedManyWithoutOwnerInput.schema'
import { DiscordEventAttendeeCreateNestedManyWithoutMemberInputObjectSchema } from './DiscordEventAttendeeCreateNestedManyWithoutMemberInput.schema'
import { DiscordEventCreateNestedManyWithoutCreatedByInputObjectSchema } from './DiscordEventCreateNestedManyWithoutCreatedByInput.schema'
import { EventScheduleCreateNestedManyWithoutCreatedByInputObjectSchema } from './EventScheduleCreateNestedManyWithoutCreatedByInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserCreateWithoutAccountInput> = z
  .object({
    id: z.string(),
    participations: z
      .lazy(() => ParticipationCreateNestedManyWithoutParticipantInputObjectSchema)
      .optional(),
    answers: z
      .lazy(() => AnswerCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    attended: z
      .lazy(() => DiscordEventAttendeeCreateNestedManyWithoutMemberInputObjectSchema)
      .optional(),
    createdEvents: z
      .lazy(() => DiscordEventCreateNestedManyWithoutCreatedByInputObjectSchema)
      .optional(),
    createdSchedules: z
      .lazy(() => EventScheduleCreateNestedManyWithoutCreatedByInputObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordUserCreateWithoutAccountInputObjectSchema = Schema
