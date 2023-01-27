import { z } from 'zod'
import { DiscordRoleUncheckedCreateNestedManyWithoutParticipationInputObjectSchema } from './DiscordRoleUncheckedCreateNestedManyWithoutParticipationInput.schema'
import { AnswerUncheckedCreateNestedOneWithoutParticipationInputObjectSchema } from './AnswerUncheckedCreateNestedOneWithoutParticipationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    questionId: z.string(),
    participantId: z.string(),
    participantRoles: z
      .lazy(
        () =>
          DiscordRoleUncheckedCreateNestedManyWithoutParticipationInputObjectSchema
      )
      .optional(),
    answer: z
      .lazy(
        () => AnswerUncheckedCreateNestedOneWithoutParticipationInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const ParticipationUncheckedCreateInputObjectSchema = Schema
