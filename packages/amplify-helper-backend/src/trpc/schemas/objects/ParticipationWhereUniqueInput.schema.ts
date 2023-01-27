import { z } from 'zod'
import { ParticipationQuestionIdParticipantIdCompoundUniqueInputObjectSchema } from './ParticipationQuestionIdParticipantIdCompoundUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    questionId_participantId: z
      .lazy(
        () => ParticipationQuestionIdParticipantIdCompoundUniqueInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const ParticipationWhereUniqueInputObjectSchema = Schema
