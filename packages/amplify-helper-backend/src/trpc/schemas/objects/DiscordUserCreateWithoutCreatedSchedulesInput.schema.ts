import { z } from 'zod'
import { AccountCreateNestedOneWithoutDiscordUserInputObjectSchema } from './AccountCreateNestedOneWithoutDiscordUserInput.schema'
import { ParticipationCreateNestedManyWithoutParticipantInputObjectSchema } from './ParticipationCreateNestedManyWithoutParticipantInput.schema'
import { AnswerCreateNestedManyWithoutOwnerInputObjectSchema } from './AnswerCreateNestedManyWithoutOwnerInput.schema'
import { DiscordEventAttendeeCreateNestedManyWithoutMemberInputObjectSchema } from './DiscordEventAttendeeCreateNestedManyWithoutMemberInput.schema'
import { DiscordEventCreateNestedManyWithoutCreatedByInputObjectSchema } from './DiscordEventCreateNestedManyWithoutCreatedByInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserCreateWithoutCreatedSchedulesInput> = z
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
    attended: z
      .lazy(() => DiscordEventAttendeeCreateNestedManyWithoutMemberInputObjectSchema)
      .optional(),
    createdEvents: z
      .lazy(() => DiscordEventCreateNestedManyWithoutCreatedByInputObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordUserCreateWithoutCreatedSchedulesInputObjectSchema = Schema
