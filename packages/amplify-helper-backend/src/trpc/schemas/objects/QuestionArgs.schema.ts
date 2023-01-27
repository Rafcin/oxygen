import { z } from 'zod'
import { QuestionSelectObjectSchema } from './QuestionSelect.schema'
import { QuestionIncludeObjectSchema } from './QuestionInclude.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionArgs> = z
  .object({
    select: z.lazy(() => QuestionSelectObjectSchema).optional(),
    include: z.lazy(() => QuestionIncludeObjectSchema).optional(),
  })
  .strict()

export const QuestionArgsObjectSchema = Schema
