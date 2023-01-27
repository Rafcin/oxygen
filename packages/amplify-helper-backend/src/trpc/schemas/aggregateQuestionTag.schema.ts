import { z } from 'zod'
import { QuestionTagOrderByWithRelationInputObjectSchema } from './objects/QuestionTagOrderByWithRelationInput.schema'
import { QuestionTagWhereInputObjectSchema } from './objects/QuestionTagWhereInput.schema'
import { QuestionTagWhereUniqueInputObjectSchema } from './objects/QuestionTagWhereUniqueInput.schema'
import { QuestionTagCountAggregateInputObjectSchema } from './objects/QuestionTagCountAggregateInput.schema'
import { QuestionTagMinAggregateInputObjectSchema } from './objects/QuestionTagMinAggregateInput.schema'
import { QuestionTagMaxAggregateInputObjectSchema } from './objects/QuestionTagMaxAggregateInput.schema'

export const QuestionTagAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), QuestionTagCountAggregateInputObjectSchema])
    .optional(),
  _min: QuestionTagMinAggregateInputObjectSchema.optional(),
  _max: QuestionTagMaxAggregateInputObjectSchema.optional(),
})
