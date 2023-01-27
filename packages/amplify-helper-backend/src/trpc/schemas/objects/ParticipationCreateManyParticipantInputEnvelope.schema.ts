import { z } from 'zod'
import { ParticipationCreateManyParticipantInputObjectSchema } from './ParticipationCreateManyParticipantInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateManyParticipantInputEnvelope> = z
  .object({
    data: z.lazy(() => ParticipationCreateManyParticipantInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const ParticipationCreateManyParticipantInputEnvelopeObjectSchema = Schema
