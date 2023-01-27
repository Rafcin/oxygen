import { z } from 'zod'
import { QuestionUpdateManyMutationInputObjectSchema } from './objects/QuestionUpdateManyMutationInput.schema'
import { QuestionWhereInputObjectSchema } from './objects/QuestionWhereInput.schema'

export const QuestionUpdateManySchema = z.object({
  data: QuestionUpdateManyMutationInputObjectSchema,
  where: QuestionWhereInputObjectSchema.optional(),
})
