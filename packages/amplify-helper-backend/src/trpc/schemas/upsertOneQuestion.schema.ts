import { z } from 'zod'
import { QuestionSelectObjectSchema } from './objects/QuestionSelect.schema'
import { QuestionIncludeObjectSchema } from './objects/QuestionInclude.schema'
import { QuestionWhereUniqueInputObjectSchema } from './objects/QuestionWhereUniqueInput.schema'
import { QuestionCreateInputObjectSchema } from './objects/QuestionCreateInput.schema'
import { QuestionUncheckedCreateInputObjectSchema } from './objects/QuestionUncheckedCreateInput.schema'
import { QuestionUpdateInputObjectSchema } from './objects/QuestionUpdateInput.schema'
import { QuestionUncheckedUpdateInputObjectSchema } from './objects/QuestionUncheckedUpdateInput.schema'

export const QuestionUpsertSchema = z.object({
  select: QuestionSelectObjectSchema.optional(),
  include: QuestionIncludeObjectSchema.optional(),
  where: QuestionWhereUniqueInputObjectSchema,
  create: z.union([
    QuestionCreateInputObjectSchema,
    QuestionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    QuestionUpdateInputObjectSchema,
    QuestionUncheckedUpdateInputObjectSchema,
  ]),
})
