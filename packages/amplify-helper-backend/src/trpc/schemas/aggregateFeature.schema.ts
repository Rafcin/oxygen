import { z } from 'zod'
import { FeatureOrderByWithRelationInputObjectSchema } from './objects/FeatureOrderByWithRelationInput.schema'
import { FeatureWhereInputObjectSchema } from './objects/FeatureWhereInput.schema'
import { FeatureWhereUniqueInputObjectSchema } from './objects/FeatureWhereUniqueInput.schema'
import { FeatureCountAggregateInputObjectSchema } from './objects/FeatureCountAggregateInput.schema'
import { FeatureMinAggregateInputObjectSchema } from './objects/FeatureMinAggregateInput.schema'
import { FeatureMaxAggregateInputObjectSchema } from './objects/FeatureMaxAggregateInput.schema'

export const FeatureAggregateSchema = z.object({
  orderBy: z
    .union([
      FeatureOrderByWithRelationInputObjectSchema,
      FeatureOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FeatureWhereInputObjectSchema.optional(),
  cursor: FeatureWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), FeatureCountAggregateInputObjectSchema])
    .optional(),
  _min: FeatureMinAggregateInputObjectSchema.optional(),
  _max: FeatureMaxAggregateInputObjectSchema.optional(),
})
