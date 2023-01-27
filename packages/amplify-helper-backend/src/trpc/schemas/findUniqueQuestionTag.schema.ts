import { z } from 'zod'
import { QuestionTagSelectObjectSchema } from './objects/QuestionTagSelect.schema'
import { QuestionTagIncludeObjectSchema } from './objects/QuestionTagInclude.schema'
import { QuestionTagWhereUniqueInputObjectSchema } from './objects/QuestionTagWhereUniqueInput.schema'

export const QuestionTagFindUniqueSchema = z.object({
  select: QuestionTagSelectObjectSchema.optional(),
  include: QuestionTagIncludeObjectSchema.optional(),
  where: QuestionTagWhereUniqueInputObjectSchema,
})
