import { z } from 'zod'
import { QuestionWhereInputObjectSchema } from './objects/QuestionWhereInput.schema'
import { QuestionOrderByWithAggregationInputObjectSchema } from './objects/QuestionOrderByWithAggregationInput.schema'
import { QuestionScalarWhereWithAggregatesInputObjectSchema } from './objects/QuestionScalarWhereWithAggregatesInput.schema'
import { QuestionScalarFieldEnumSchema } from './enums/QuestionScalarFieldEnum.schema'

export const QuestionGroupBySchema = z.object({
  where: QuestionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      QuestionOrderByWithAggregationInputObjectSchema,
      QuestionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: QuestionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(QuestionScalarFieldEnumSchema),
})
