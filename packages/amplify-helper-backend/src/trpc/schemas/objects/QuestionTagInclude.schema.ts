import { z } from 'zod'
import { QuestionFindManySchema } from '../findManyQuestion.schema'
import { QuestionTagCountOutputTypeArgsObjectSchema } from './QuestionTagCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagInclude> = z
  .object({
    questions: z
      .union([z.boolean(), z.lazy(() => QuestionFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => QuestionTagCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const QuestionTagIncludeObjectSchema = Schema
