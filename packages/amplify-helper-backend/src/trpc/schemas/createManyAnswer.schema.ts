import { z } from 'zod'
import { AnswerCreateManyInputObjectSchema } from './objects/AnswerCreateManyInput.schema'

export const AnswerCreateManySchema = z.object({
  data: z.union([
    AnswerCreateManyInputObjectSchema,
    z.array(AnswerCreateManyInputObjectSchema),
  ]),
})
