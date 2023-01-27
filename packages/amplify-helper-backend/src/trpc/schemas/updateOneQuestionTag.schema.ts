import { z } from 'zod'
import { QuestionTagSelectObjectSchema } from './objects/QuestionTagSelect.schema'
import { QuestionTagIncludeObjectSchema } from './objects/QuestionTagInclude.schema'
import { QuestionTagUpdateInputObjectSchema } from './objects/QuestionTagUpdateInput.schema'
import { QuestionTagUncheckedUpdateInputObjectSchema } from './objects/QuestionTagUncheckedUpdateInput.schema'
import { QuestionTagWhereUniqueInputObjectSchema } from './objects/QuestionTagWhereUniqueInput.schema'

export const QuestionTagUpdateOneSchema = z.object({
  select: QuestionTagSelectObjectSchema.optional(),
  include: QuestionTagIncludeObjectSchema.optional(),
  data: z.union([
    QuestionTagUpdateInputObjectSchema,
    QuestionTagUncheckedUpdateInputObjectSchema,
  ]),
  where: QuestionTagWhereUniqueInputObjectSchema,
})
