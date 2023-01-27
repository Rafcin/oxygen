import { z } from 'zod'
import { AnswerSelectObjectSchema } from './objects/AnswerSelect.schema'
import { AnswerIncludeObjectSchema } from './objects/AnswerInclude.schema'
import { AnswerWhereUniqueInputObjectSchema } from './objects/AnswerWhereUniqueInput.schema'
import { AnswerCreateInputObjectSchema } from './objects/AnswerCreateInput.schema'
import { AnswerUncheckedCreateInputObjectSchema } from './objects/AnswerUncheckedCreateInput.schema'
import { AnswerUpdateInputObjectSchema } from './objects/AnswerUpdateInput.schema'
import { AnswerUncheckedUpdateInputObjectSchema } from './objects/AnswerUncheckedUpdateInput.schema'

export const AnswerUpsertSchema = z.object({
  select: AnswerSelectObjectSchema.optional(),
  include: AnswerIncludeObjectSchema.optional(),
  where: AnswerWhereUniqueInputObjectSchema,
  create: z.union([
    AnswerCreateInputObjectSchema,
    AnswerUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AnswerUpdateInputObjectSchema,
    AnswerUncheckedUpdateInputObjectSchema,
  ]),
})
