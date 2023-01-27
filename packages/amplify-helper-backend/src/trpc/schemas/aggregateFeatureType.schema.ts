import { z } from 'zod'
import { FeatureTypeOrderByWithRelationInputObjectSchema } from './objects/FeatureTypeOrderByWithRelationInput.schema'
import { FeatureTypeWhereInputObjectSchema } from './objects/FeatureTypeWhereInput.schema'
import { FeatureTypeWhereUniqueInputObjectSchema } from './objects/FeatureTypeWhereUniqueInput.schema'
import { FeatureTypeCountAggregateInputObjectSchema } from './objects/FeatureTypeCountAggregateInput.schema'
import { FeatureTypeMinAggregateInputObjectSchema } from './objects/FeatureTypeMinAggregateInput.schema'
import { FeatureTypeMaxAggregateInputObjectSchema } from './objects/FeatureTypeMaxAggregateInput.schema'

export const FeatureTypeAggregateSchema = z.object({
  orderBy: z
    .union([
      FeatureTypeOrderByWithRelationInputObjectSchema,
      FeatureTypeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FeatureTypeWhereInputObjectSchema.optional(),
  cursor: FeatureTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), FeatureTypeCountAggregateInputObjectSchema])
    .optional(),
  _min: FeatureTypeMinAggregateInputObjectSchema.optional(),
  _max: FeatureTypeMaxAggregateInputObjectSchema.optional(),
})
