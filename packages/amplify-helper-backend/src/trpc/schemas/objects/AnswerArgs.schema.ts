import { z } from 'zod'
import { AnswerSelectObjectSchema } from './AnswerSelect.schema'
import { AnswerIncludeObjectSchema } from './AnswerInclude.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerArgs> = z
  .object({
    select: z.lazy(() => AnswerSelectObjectSchema).optional(),
    include: z.lazy(() => AnswerIncludeObjectSchema).optional(),
  })
  .strict()

export const AnswerArgsObjectSchema = Schema
