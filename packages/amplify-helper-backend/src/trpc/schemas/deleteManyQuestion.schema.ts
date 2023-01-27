import { z } from 'zod'
import { QuestionWhereInputObjectSchema } from './objects/QuestionWhereInput.schema'

export const QuestionDeleteManySchema = z.object({
  where: QuestionWhereInputObjectSchema.optional(),
})
