import { z } from 'zod'
import { QuestionSelectObjectSchema } from './objects/QuestionSelect.schema'
import { QuestionIncludeObjectSchema } from './objects/QuestionInclude.schema'
import { QuestionCreateInputObjectSchema } from './objects/QuestionCreateInput.schema'
import { QuestionUncheckedCreateInputObjectSchema } from './objects/QuestionUncheckedCreateInput.schema'

export const QuestionCreateOneSchema = z.object({
  select: QuestionSelectObjectSchema.optional(),
  include: QuestionIncludeObjectSchema.optional(),
  data: z.union([
    QuestionCreateInputObjectSchema,
    QuestionUncheckedCreateInputObjectSchema,
  ]),
})
