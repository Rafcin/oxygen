import { z } from 'zod'
import { AccountCreateNestedOneWithoutDiscordUserInputObjectSchema } from './AccountCreateNestedOneWithoutDiscordUserInput.schema'
import { ParticipationCreateNestedManyWithoutParticipantInputObjectSchema } from './ParticipationCreateNestedManyWithoutParticipantInput.schema'
import { AnswerCreateNestedManyWithoutOwnerInputObjectSchema } from './AnswerCreateNestedManyWithoutOwnerInput.schema'
import { DiscordEventCreateNestedManyWithoutCreatedByInputObjectSchema } from './DiscordEventCreateNestedManyWithoutCreatedByInput.schema'
import { EventScheduleCreateNestedManyWithoutCreatedByInputObjectSchema } from './EventScheduleCreateNestedManyWithoutCreatedByInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserCreateWithoutAttendedInput> = z
  .object({
    id: z.string(),
    account: z
      .lazy(() => AccountCreateNestedOneWithoutDiscordUserInputObjectSchema)
      .optional(),
    participations: z
      .lazy(() => ParticipationCreateNestedManyWithoutParticipantInputObjectSchema)
      .optional(),
    answers: z
      .lazy(() => AnswerCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    createdEvents: z
      .lazy(() => DiscordEventCreateNestedManyWithoutCreatedByInputObjectSchema)
      .optional(),
    createdSchedules: z
      .lazy(() => EventScheduleCreateNestedManyWithoutCreatedByInputObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordUserCreateWithoutAttendedInputObjectSchema = Schema
