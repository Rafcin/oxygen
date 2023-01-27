import { z } from 'zod'
import { FeatureWhereInputObjectSchema } from './objects/FeatureWhereInput.schema'
import { FeatureOrderByWithAggregationInputObjectSchema } from './objects/FeatureOrderByWithAggregationInput.schema'
import { FeatureScalarWhereWithAggregatesInputObjectSchema } from './objects/FeatureScalarWhereWithAggregatesInput.schema'
import { FeatureScalarFieldEnumSchema } from './enums/FeatureScalarFieldEnum.schema'

export const FeatureGroupBySchema = z.object({
  where: FeatureWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FeatureOrderByWithAggregationInputObjectSchema,
      FeatureOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: FeatureScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FeatureScalarFieldEnumSchema),
})
