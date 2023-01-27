import { z } from 'zod'
import { QuestionTagSelectObjectSchema } from './objects/QuestionTagSelect.schema'
import { QuestionTagIncludeObjectSchema } from './objects/QuestionTagInclude.schema'
import { QuestionTagWhereUniqueInputObjectSchema } from './objects/QuestionTagWhereUniqueInput.schema'
import { QuestionTagCreateInputObjectSchema } from './objects/QuestionTagCreateInput.schema'
import { QuestionTagUncheckedCreateInputObjectSchema } from './objects/QuestionTagUncheckedCreateInput.schema'
import { QuestionTagUpdateInputObjectSchema } from './objects/QuestionTagUpdateInput.schema'
import { QuestionTagUncheckedUpdateInputObjectSchema } from './objects/QuestionTagUncheckedUpdateInput.schema'

export const QuestionTagUpsertSchema = z.object({
  select: QuestionTagSelectObjectSchema.optional(),
  include: QuestionTagIncludeObjectSchema.optional(),
  where: QuestionTagWhereUniqueInputObjectSchema,
  create: z.union([
    QuestionTagCreateInputObjectSchema,
    QuestionTagUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    QuestionTagUpdateInputObjectSchema,
    QuestionTagUncheckedUpdateInputObjectSchema,
  ]),
})
