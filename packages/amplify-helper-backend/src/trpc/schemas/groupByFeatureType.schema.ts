import { z } from 'zod'
import { FeatureTypeWhereInputObjectSchema } from './objects/FeatureTypeWhereInput.schema'
import { FeatureTypeOrderByWithAggregationInputObjectSchema } from './objects/FeatureTypeOrderByWithAggregationInput.schema'
import { FeatureTypeScalarWhereWithAggregatesInputObjectSchema } from './objects/FeatureTypeScalarWhereWithAggregatesInput.schema'
import { FeatureTypeScalarFieldEnumSchema } from './enums/FeatureTypeScalarFieldEnum.schema'

export const FeatureTypeGroupBySchema = z.object({
  where: FeatureTypeWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FeatureTypeOrderByWithAggregationInputObjectSchema,
      FeatureTypeOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: FeatureTypeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FeatureTypeScalarFieldEnumSchema),
})
