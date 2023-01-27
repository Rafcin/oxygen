import { z } from 'zod'
import { AnswerWhereInputObjectSchema } from './AnswerWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerRelationFilter> = z
  .object({
    is: z
      .lazy(() => AnswerWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => AnswerWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const AnswerRelationFilterObjectSchema = Schema
