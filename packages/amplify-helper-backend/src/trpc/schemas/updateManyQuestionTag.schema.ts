import { z } from 'zod'
import { QuestionTagUpdateManyMutationInputObjectSchema } from './objects/QuestionTagUpdateManyMutationInput.schema'
import { QuestionTagWhereInputObjectSchema } from './objects/QuestionTagWhereInput.schema'

export const QuestionTagUpdateManySchema = z.object({
  data: QuestionTagUpdateManyMutationInputObjectSchema,
  where: QuestionTagWhereInputObjectSchema.optional(),
})
