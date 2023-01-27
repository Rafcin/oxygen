import { z } from 'zod'
import { ParticipationWhereInputObjectSchema } from './ParticipationWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationListRelationFilter> = z
  .object({
    every: z.lazy(() => ParticipationWhereInputObjectSchema).optional(),
    some: z.lazy(() => ParticipationWhereInputObjectSchema).optional(),
    none: z.lazy(() => ParticipationWhereInputObjectSchema).optional(),
  })
  .strict()

export const ParticipationListRelationFilterObjectSchema = Schema
