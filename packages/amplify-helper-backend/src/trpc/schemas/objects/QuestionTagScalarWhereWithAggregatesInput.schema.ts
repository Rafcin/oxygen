import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuestionTagScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => QuestionTagScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuestionTagScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuestionTagScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => QuestionTagScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const QuestionTagScalarWhereWithAggregatesInputObjectSchema = Schema
