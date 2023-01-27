import { z } from 'zod'
import { QuestionCountOutputTypeSelectObjectSchema } from './QuestionCountOutputTypeSelect.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => QuestionCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const QuestionCountOutputTypeArgsObjectSchema = Schema
