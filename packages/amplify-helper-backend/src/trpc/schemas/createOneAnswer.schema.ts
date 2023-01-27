import { z } from 'zod'
import { AnswerSelectObjectSchema } from './objects/AnswerSelect.schema'
import { AnswerIncludeObjectSchema } from './objects/AnswerInclude.schema'
import { AnswerCreateInputObjectSchema } from './objects/AnswerCreateInput.schema'
import { AnswerUncheckedCreateInputObjectSchema } from './objects/AnswerUncheckedCreateInput.schema'

export const AnswerCreateOneSchema = z.object({
  select: AnswerSelectObjectSchema.optional(),
  include: AnswerIncludeObjectSchema.optional(),
  data: z.union([
    AnswerCreateInputObjectSchema,
    AnswerUncheckedCreateInputObjectSchema,
  ]),
})
