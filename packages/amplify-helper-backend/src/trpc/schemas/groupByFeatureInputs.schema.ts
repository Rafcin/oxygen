import { z } from 'zod'
import { FeatureInputsWhereInputObjectSchema } from './objects/FeatureInputsWhereInput.schema'
import { FeatureInputsOrderByWithAggregationInputObjectSchema } from './objects/FeatureInputsOrderByWithAggregationInput.schema'
import { FeatureInputsScalarWhereWithAggregatesInputObjectSchema } from './objects/FeatureInputsScalarWhereWithAggregatesInput.schema'
import { FeatureInputsScalarFieldEnumSchema } from './enums/FeatureInputsScalarFieldEnum.schema'

export const FeatureInputsGroupBySchema = z.object({
  where: FeatureInputsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FeatureInputsOrderByWithAggregationInputObjectSchema,
      FeatureInputsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: FeatureInputsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FeatureInputsScalarFieldEnumSchema),
})
