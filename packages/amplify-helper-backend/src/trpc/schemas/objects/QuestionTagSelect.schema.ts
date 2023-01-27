import { z } from 'zod'
import { QuestionFindManySchema } from '../findManyQuestion.schema'
import { QuestionTagCountOutputTypeArgsObjectSchema } from './QuestionTagCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    questions: z
      .union([z.boolean(), z.lazy(() => QuestionFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => QuestionTagCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const QuestionTagSelectObjectSchema = Schema
