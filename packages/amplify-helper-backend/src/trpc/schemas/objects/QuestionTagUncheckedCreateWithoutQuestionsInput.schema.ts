import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagUncheckedCreateWithoutQuestionsInput> = z
  .object({
    id: z.string(),
    name: z.string(),
  })
  .strict()

export const QuestionTagUncheckedCreateWithoutQuestionsInputObjectSchema = Schema
