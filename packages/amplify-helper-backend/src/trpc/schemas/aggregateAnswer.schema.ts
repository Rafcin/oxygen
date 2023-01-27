import { z } from 'zod'
import { AnswerOrderByWithRelationInputObjectSchema } from './objects/AnswerOrderByWithRelationInput.schema'
import { AnswerWhereInputObjectSchema } from './objects/AnswerWhereInput.schema'
import { AnswerWhereUniqueInputObjectSchema } from './objects/AnswerWhereUniqueInput.schema'
import { AnswerCountAggregateInputObjectSchema } from './objects/AnswerCountAggregateInput.schema'
import { AnswerMinAggregateInputObjectSchema } from './objects/AnswerMinAggregateInput.schema'
import { AnswerMaxAggregateInputObjectSchema } from './objects/AnswerMaxAggregateInput.schema'

export const AnswerAggregateSchema = z.object({
  orderBy: z
    .union([
      AnswerOrderByWithRelationInputObjectSchema,
      AnswerOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AnswerWhereInputObjectSchema.optional(),
  cursor: AnswerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), AnswerCountAggregateInputObjectSchema])
    .optional(),
  _min: AnswerMinAggregateInputObjectSchema.optional(),
  _max: AnswerMaxAggregateInputObjectSchema.optional(),
})
