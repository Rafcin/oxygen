import { z } from 'zod'
import { QuestionSelectObjectSchema } from './objects/QuestionSelect.schema'
import { QuestionIncludeObjectSchema } from './objects/QuestionInclude.schema'
import { QuestionWhereUniqueInputObjectSchema } from './objects/QuestionWhereUniqueInput.schema'

export const QuestionDeleteOneSchema = z.object({
  select: QuestionSelectObjectSchema.optional(),
  include: QuestionIncludeObjectSchema.optional(),
  where: QuestionWhereUniqueInputObjectSchema,
})
