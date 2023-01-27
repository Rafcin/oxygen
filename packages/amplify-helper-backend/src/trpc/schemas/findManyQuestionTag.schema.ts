import { z } from 'zod'
import { QuestionTagSelectObjectSchema } from './objects/QuestionTagSelect.schema'
import { QuestionTagIncludeObjectSchema } from './objects/QuestionTagInclude.schema'
import { QuestionTagOrderByWithRelationInputObjectSchema } from './objects/QuestionTagOrderByWithRelationInput.schema'
import { QuestionTagWhereInputObjectSchema } from './objects/QuestionTagWhereInput.schema'
import { QuestionTagWhereUniqueInputObjectSchema } from './objects/QuestionTagWhereUniqueInput.schema'
import { QuestionTagScalarFieldEnumSchema } from './enums/QuestionTagScalarFieldEnum.schema'

export const QuestionTagFindManySchema = z.object({
  select: z.lazy(() => QuestionTagSelectObjectSchema.optional()),
  include: z.lazy(() => QuestionTagIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      QuestionTagOrderByWithRelationInputObjectSchema,
      QuestionTagOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: QuestionTagWhereInputObjectSchema.optional(),
  cursor: QuestionTagWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(QuestionTagScalarFieldEnumSchema).optional(),
})
