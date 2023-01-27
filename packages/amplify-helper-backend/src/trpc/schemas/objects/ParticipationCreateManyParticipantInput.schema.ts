import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateManyParticipantInput> = z
  .object({
    id: z.string().optional(),
    questionId: z.string(),
  })
  .strict()

export const ParticipationCreateManyParticipantInputObjectSchema = Schema
