import { z } from 'zod'
import { ConfigurationFeatureOrderByWithRelationInputObjectSchema } from './objects/ConfigurationFeatureOrderByWithRelationInput.schema'
import { ConfigurationFeatureWhereInputObjectSchema } from './objects/ConfigurationFeatureWhereInput.schema'
import { ConfigurationFeatureWhereUniqueInputObjectSchema } from './objects/ConfigurationFeatureWhereUniqueInput.schema'
import { ConfigurationFeatureCountAggregateInputObjectSchema } from './objects/ConfigurationFeatureCountAggregateInput.schema'
import { ConfigurationFeatureMinAggregateInputObjectSchema } from './objects/ConfigurationFeatureMinAggregateInput.schema'
import { ConfigurationFeatureMaxAggregateInputObjectSchema } from './objects/ConfigurationFeatureMaxAggregateInput.schema'

export const ConfigurationFeatureAggregateSchema = z.object({
  orderBy: z
    .union([
      ConfigurationFeatureOrderByWithRelationInputObjectSchema,
      ConfigurationFeatureOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ConfigurationFeatureWhereInputObjectSchema.optional(),
  cursor: ConfigurationFeatureWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ConfigurationFeatureCountAggregateInputObjectSchema])
    .optional(),
  _min: ConfigurationFeatureMinAggregateInputObjectSchema.optional(),
  _max: ConfigurationFeatureMaxAggregateInputObjectSchema.optional(),
})
