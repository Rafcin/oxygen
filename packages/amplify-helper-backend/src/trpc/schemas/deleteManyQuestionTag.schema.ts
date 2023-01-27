import { z } from 'zod'
import { QuestionTagWhereInputObjectSchema } from './objects/QuestionTagWhereInput.schema'

export const QuestionTagDeleteManySchema = z.object({
  where: QuestionTagWhereInputObjectSchema.optional(),
})
