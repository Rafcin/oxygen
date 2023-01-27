import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationQuestionIdParticipantIdCompoundUniqueInput> =
  z
    .object({
      questionId: z.string(),
      participantId: z.string(),
    })
    .strict()

export const ParticipationQuestionIdParticipantIdCompoundUniqueInputObjectSchema =
  Schema
