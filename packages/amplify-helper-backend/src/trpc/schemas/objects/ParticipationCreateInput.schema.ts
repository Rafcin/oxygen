import { z } from 'zod'
import { QuestionCreateNestedOneWithoutParticipationInputObjectSchema } from './QuestionCreateNestedOneWithoutParticipationInput.schema'
import { DiscordUserCreateNestedOneWithoutParticipationsInputObjectSchema } from './DiscordUserCreateNestedOneWithoutParticipationsInput.schema'
import { DiscordRoleCreateNestedManyWithoutParticipationInputObjectSchema } from './DiscordRoleCreateNestedManyWithoutParticipationInput.schema'
import { AnswerCreateNestedOneWithoutParticipationInputObjectSchema } from './AnswerCreateNestedOneWithoutParticipationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateInput> = z
  .object({
    id: z.string().optional(),
    question: z.lazy(
      () => QuestionCreateNestedOneWithoutParticipationInputObjectSchema
    ),
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

export const ParticipationCreateInputObjectSchema = Schema
