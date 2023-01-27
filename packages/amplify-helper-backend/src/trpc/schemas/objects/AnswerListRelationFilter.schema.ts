import { z } from 'zod'
import { AnswerWhereInputObjectSchema } from './AnswerWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerListRelationFilter> = z
  .object({
    every: z.lazy(() => AnswerWhereInputObjectSchema).optional(),
    some: z.lazy(() => AnswerWhereInputObjectSchema).optional(),
    none: z.lazy(() => AnswerWhereInputObjectSchema).optional(),
  })
  .strict()

export const AnswerListRelationFilterObjectSchema = Schema
