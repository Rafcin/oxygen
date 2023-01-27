import { z } from 'zod'
import { QuestionTagWhereInputObjectSchema } from './objects/QuestionTagWhereInput.schema'
import { QuestionTagOrderByWithAggregationInputObjectSchema } from './objects/QuestionTagOrderByWithAggregationInput.schema'
import { QuestionTagScalarWhereWithAggregatesInputObjectSchema } from './objects/QuestionTagScalarWhereWithAggregatesInput.schema'
import { QuestionTagScalarFieldEnumSchema } from './enums/QuestionTagScalarFieldEnum.schema'

export const QuestionTagGroupBySchema = z.object({
  where: QuestionTagWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      QuestionTagOrderByWithAggregationInputObjectSchema,
      QuestionTagOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: QuestionTagScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(QuestionTagScalarFieldEnumSchema),
})
