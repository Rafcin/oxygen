import { z } from 'zod'
import { QuestionSelectObjectSchema } from './objects/QuestionSelect.schema'
import { QuestionIncludeObjectSchema } from './objects/QuestionInclude.schema'
import { QuestionOrderByWithRelationInputObjectSchema } from './objects/QuestionOrderByWithRelationInput.schema'
import { QuestionWhereInputObjectSchema } from './objects/QuestionWhereInput.schema'
import { QuestionWhereUniqueInputObjectSchema } from './objects/QuestionWhereUniqueInput.schema'
import { QuestionScalarFieldEnumSchema } from './enums/QuestionScalarFieldEnum.schema'

export const QuestionFindFirstSchema = z.object({
  select: QuestionSelectObjectSchema.optional(),
  include: QuestionIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      QuestionOrderByWithRelationInputObjectSchema,
      QuestionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: QuestionWhereInputObjectSchema.optional(),
  cursor: QuestionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(QuestionScalarFieldEnumSchema).optional(),
})
