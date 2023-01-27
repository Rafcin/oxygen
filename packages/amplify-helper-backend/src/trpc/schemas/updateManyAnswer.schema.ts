import { z } from 'zod'
import { AnswerUpdateManyMutationInputObjectSchema } from './objects/AnswerUpdateManyMutationInput.schema'
import { AnswerWhereInputObjectSchema } from './objects/AnswerWhereInput.schema'

export const AnswerUpdateManySchema = z.object({
  data: AnswerUpdateManyMutationInputObjectSchema,
  where: AnswerWhereInputObjectSchema.optional(),
})
