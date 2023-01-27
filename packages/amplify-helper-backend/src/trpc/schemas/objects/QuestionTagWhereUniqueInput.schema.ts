import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
  })
  .strict()

export const QuestionTagWhereUniqueInputObjectSchema = Schema
