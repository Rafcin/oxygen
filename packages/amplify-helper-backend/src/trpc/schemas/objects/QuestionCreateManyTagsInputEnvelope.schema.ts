import { z } from 'zod'
import { QuestionCreateManyTagsInputObjectSchema } from './QuestionCreateManyTagsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionCreateManyTagsInputEnvelope> = z
  .object({
    data: z.lazy(() => QuestionCreateManyTagsInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const QuestionCreateManyTagsInputEnvelopeObjectSchema = Schema
