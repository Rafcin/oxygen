import { z } from 'zod'
import { FeatureInputsOrderByWithRelationInputObjectSchema } from './objects/FeatureInputsOrderByWithRelationInput.schema'
import { FeatureInputsWhereInputObjectSchema } from './objects/FeatureInputsWhereInput.schema'
import { FeatureInputsWhereUniqueInputObjectSchema } from './objects/FeatureInputsWhereUniqueInput.schema'
import { FeatureInputsCountAggregateInputObjectSchema } from './objects/FeatureInputsCountAggregateInput.schema'
import { FeatureInputsMinAggregateInputObjectSchema } from './objects/FeatureInputsMinAggregateInput.schema'
import { FeatureInputsMaxAggregateInputObjectSchema } from './objects/FeatureInputsMaxAggregateInput.schema'

export const FeatureInputsAggregateSchema = z.object({
  orderBy: z
    .union([
      FeatureInputsOrderByWithRelationInputObjectSchema,
      FeatureInputsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FeatureInputsWhereInputObjectSchema.optional(),
  cursor: FeatureInputsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), FeatureInputsCountAggregateInputObjectSchema])
    .optional(),
  _min: FeatureInputsMinAggregateInputObjectSchema.optional(),
  _max: FeatureInputsMaxAggregateInputObjectSchema.optional(),
})
