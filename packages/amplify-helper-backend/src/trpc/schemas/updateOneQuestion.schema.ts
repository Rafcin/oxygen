import { z } from 'zod'
import { QuestionSelectObjectSchema } from './objects/QuestionSelect.schema'
import { QuestionIncludeObjectSchema } from './objects/QuestionInclude.schema'
import { QuestionUpdateInputObjectSchema } from './objects/QuestionUpdateInput.schema'
import { QuestionUncheckedUpdateInputObjectSchema } from './objects/QuestionUncheckedUpdateInput.schema'
import { QuestionWhereUniqueInputObjectSchema } from './objects/QuestionWhereUniqueInput.schema'

export const QuestionUpdateOneSchema = z.object({
  select: QuestionSelectObjectSchema.optional(),
  include: QuestionIncludeObjectSchema.optional(),
  data: z.union([
    QuestionUpdateInputObjectSchema,
    QuestionUncheckedUpdateInputObjectSchema,
  ]),
  where: QuestionWhereUniqueInputObjectSchema,
})
