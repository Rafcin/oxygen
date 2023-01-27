import { z } from 'zod'
import { QuestionWhereInputObjectSchema } from './QuestionWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionRelationFilter> = z
  .object({
    is: z.lazy(() => QuestionWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => QuestionWhereInputObjectSchema).optional(),
  })
  .strict()

export const QuestionRelationFilterObjectSchema = Schema
