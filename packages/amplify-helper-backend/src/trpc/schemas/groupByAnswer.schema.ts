import { z } from 'zod'
import { AnswerWhereInputObjectSchema } from './objects/AnswerWhereInput.schema'
import { AnswerOrderByWithAggregationInputObjectSchema } from './objects/AnswerOrderByWithAggregationInput.schema'
import { AnswerScalarWhereWithAggregatesInputObjectSchema } from './objects/AnswerScalarWhereWithAggregatesInput.schema'
import { AnswerScalarFieldEnumSchema } from './enums/AnswerScalarFieldEnum.schema'

export const AnswerGroupBySchema = z.object({
  where: AnswerWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AnswerOrderByWithAggregationInputObjectSchema,
      AnswerOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: AnswerScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AnswerScalarFieldEnumSchema),
})
