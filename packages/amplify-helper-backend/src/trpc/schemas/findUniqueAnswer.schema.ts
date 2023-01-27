import { z } from 'zod'
import { AnswerSelectObjectSchema } from './objects/AnswerSelect.schema'
import { AnswerIncludeObjectSchema } from './objects/AnswerInclude.schema'
import { AnswerWhereUniqueInputObjectSchema } from './objects/AnswerWhereUniqueInput.schema'

export const AnswerFindUniqueSchema = z.object({
  select: AnswerSelectObjectSchema.optional(),
  include: AnswerIncludeObjectSchema.optional(),
  where: AnswerWhereUniqueInputObjectSchema,
})
