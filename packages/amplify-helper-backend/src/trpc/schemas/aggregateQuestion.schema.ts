import { z } from 'zod'
import { QuestionOrderByWithRelationInputObjectSchema } from './objects/QuestionOrderByWithRelationInput.schema'
import { QuestionWhereInputObjectSchema } from './objects/QuestionWhereInput.schema'
import { QuestionWhereUniqueInputObjectSchema } from './objects/QuestionWhereUniqueInput.schema'
import { QuestionCountAggregateInputObjectSchema } from './objects/QuestionCountAggregateInput.schema'
import { QuestionMinAggregateInputObjectSchema } from './objects/QuestionMinAggregateInput.schema'
import { QuestionMaxAggregateInputObjectSchema } from './objects/QuestionMaxAggregateInput.schema'

export const QuestionAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), QuestionCountAggregateInputObjectSchema])
    .optional(),
  _min: QuestionMinAggregateInputObjectSchema.optional(),
  _max: QuestionMaxAggregateInputObjectSchema.optional(),
})
