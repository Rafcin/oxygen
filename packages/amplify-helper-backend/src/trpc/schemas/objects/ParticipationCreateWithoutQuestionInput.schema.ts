import { z } from 'zod'
import { DiscordUserCreateNestedOneWithoutParticipationsInputObjectSchema } from './DiscordUserCreateNestedOneWithoutParticipationsInput.schema'
import { DiscordRoleCreateNestedManyWithoutParticipationInputObjectSchema } from './DiscordRoleCreateNestedManyWithoutParticipationInput.schema'
import { AnswerCreateNestedOneWithoutParticipationInputObjectSchema } from './AnswerCreateNestedOneWithoutParticipationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateWithoutQuestionInput> = z
  .object({
    id: z.string().optional(),
    participant: z.lazy(
      () => DiscordUserCreateNestedOneWithoutParticipationsInputObjectSchema
    ),
    participantRoles: z
      .lazy(() => DiscordRoleCreateNestedManyWithoutParticipationInputObjectSchema)
      .optional(),
    answer: z
      .lazy(() => AnswerCreateNestedOneWithoutParticipationInputObjectSchema)
      .optional(),
  })
  .strict()

export const ParticipationCreateWithoutQuestionInputObjectSchema = Schema
