import { z } from 'zod'
import { ParticipationCountOutputTypeSelectObjectSchema } from './ParticipationCountOutputTypeSelect.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ParticipationCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const ParticipationCountOutputTypeArgsObjectSchema = Schema
