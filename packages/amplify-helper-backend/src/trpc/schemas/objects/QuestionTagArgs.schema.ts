import { z } from 'zod'
import { QuestionTagSelectObjectSchema } from './QuestionTagSelect.schema'
import { QuestionTagIncludeObjectSchema } from './QuestionTagInclude.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagArgs> = z
  .object({
    select: z.lazy(() => QuestionTagSelectObjectSchema).optional(),
    include: z.lazy(() => QuestionTagIncludeObjectSchema).optional(),
  })
  .strict()

export const QuestionTagArgsObjectSchema = Schema
