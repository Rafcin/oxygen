import { z } from 'zod'
import { QuestionTagWhereInputObjectSchema } from './QuestionTagWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagRelationFilter> = z
  .object({
    is: z
      .lazy(() => QuestionTagWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => QuestionTagWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const QuestionTagRelationFilterObjectSchema = Schema
