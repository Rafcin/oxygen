import { z } from 'zod'
import { QuestionWhereInputObjectSchema } from './QuestionWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionListRelationFilter> = z
  .object({
    every: z.lazy(() => QuestionWhereInputObjectSchema).optional(),
    some: z.lazy(() => QuestionWhereInputObjectSchema).optional(),
    none: z.lazy(() => QuestionWhereInputObjectSchema).optional(),
  })
  .strict()

export const QuestionListRelationFilterObjectSchema = Schema
