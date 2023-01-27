import { z } from 'zod'
import { ConfigurationFeatureWhereInputObjectSchema } from './objects/ConfigurationFeatureWhereInput.schema'
import { ConfigurationFeatureOrderByWithAggregationInputObjectSchema } from './objects/ConfigurationFeatureOrderByWithAggregationInput.schema'
import { ConfigurationFeatureScalarWhereWithAggregatesInputObjectSchema } from './objects/ConfigurationFeatureScalarWhereWithAggregatesInput.schema'
import { ConfigurationFeatureScalarFieldEnumSchema } from './enums/ConfigurationFeatureScalarFieldEnum.schema'

export const ConfigurationFeatureGroupBySchema = z.object({
  where: ConfigurationFeatureWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ConfigurationFeatureOrderByWithAggregationInputObjectSchema,
      ConfigurationFeatureOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ConfigurationFeatureScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ConfigurationFeatureScalarFieldEnumSchema),
})
