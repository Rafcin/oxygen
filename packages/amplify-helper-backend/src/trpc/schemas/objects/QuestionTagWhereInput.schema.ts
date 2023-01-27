import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { QuestionListRelationFilterObjectSchema } from './QuestionListRelationFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuestionTagWhereInputObjectSchema),
        z.lazy(() => QuestionTagWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuestionTagWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuestionTagWhereInputObjectSchema),
        z.lazy(() => QuestionTagWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    questions: z.lazy(() => QuestionListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const QuestionTagWhereInputObjectSchema = Schema
