import { z } from 'zod'
import { ParticipationCreateManyQuestionInputObjectSchema } from './ParticipationCreateManyQuestionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateManyQuestionInputEnvelope> = z
  .object({
    data: z.lazy(() => ParticipationCreateManyQuestionInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const ParticipationCreateManyQuestionInputEnvelopeObjectSchema = Schema
