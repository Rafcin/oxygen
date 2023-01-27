import { z } from 'zod'
import { AnswerSelectObjectSchema } from './objects/AnswerSelect.schema'
import { AnswerIncludeObjectSchema } from './objects/AnswerInclude.schema'
import { AnswerUpdateInputObjectSchema } from './objects/AnswerUpdateInput.schema'
import { AnswerUncheckedUpdateInputObjectSchema } from './objects/AnswerUncheckedUpdateInput.schema'
import { AnswerWhereUniqueInputObjectSchema } from './objects/AnswerWhereUniqueInput.schema'

export const AnswerUpdateOneSchema = z.object({
  select: AnswerSelectObjectSchema.optional(),
  include: AnswerIncludeObjectSchema.optional(),
  data: z.union([
    AnswerUpdateInputObjectSchema,
    AnswerUncheckedUpdateInputObjectSchema,
  ]),
  where: AnswerWhereUniqueInputObjectSchema,
})
