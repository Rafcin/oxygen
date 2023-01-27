import { z } from 'zod'
import { QuestionCreateManyGuildInputObjectSchema } from './QuestionCreateManyGuildInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionCreateManyGuildInputEnvelope> = z
  .object({
    data: z.lazy(() => QuestionCreateManyGuildInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const QuestionCreateManyGuildInputEnvelopeObjectSchema = Schema
