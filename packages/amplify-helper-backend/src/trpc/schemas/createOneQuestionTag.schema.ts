import { z } from 'zod'
import { QuestionTagSelectObjectSchema } from './objects/QuestionTagSelect.schema'
import { QuestionTagIncludeObjectSchema } from './objects/QuestionTagInclude.schema'
import { QuestionTagCreateInputObjectSchema } from './objects/QuestionTagCreateInput.schema'
import { QuestionTagUncheckedCreateInputObjectSchema } from './objects/QuestionTagUncheckedCreateInput.schema'

export const QuestionTagCreateOneSchema = z.object({
  select: QuestionTagSelectObjectSchema.optional(),
  include: QuestionTagIncludeObjectSchema.optional(),
  data: z.union([
    QuestionTagCreateInputObjectSchema,
    QuestionTagUncheckedCreateInputObjectSchema,
  ]),
})
