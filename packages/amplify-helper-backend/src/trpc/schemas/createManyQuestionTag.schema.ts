import { z } from 'zod'
import { QuestionTagCreateManyInputObjectSchema } from './objects/QuestionTagCreateManyInput.schema'

export const QuestionTagCreateManySchema = z.object({
  data: z.union([
    QuestionTagCreateManyInputObjectSchema,
    z.array(QuestionTagCreateManyInputObjectSchema),
  ]),
})
