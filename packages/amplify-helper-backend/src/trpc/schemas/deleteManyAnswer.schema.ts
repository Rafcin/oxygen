import { z } from 'zod'
import { AnswerWhereInputObjectSchema } from './objects/AnswerWhereInput.schema'

export const AnswerDeleteManySchema = z.object({
  where: AnswerWhereInputObjectSchema.optional(),
})
