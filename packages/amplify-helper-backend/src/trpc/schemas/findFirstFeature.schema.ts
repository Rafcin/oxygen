import { z } from 'zod'
import { FeatureSelectObjectSchema } from './objects/FeatureSelect.schema'
import { FeatureIncludeObjectSchema } from './objects/FeatureInclude.schema'
import { FeatureOrderByWithRelationInputObjectSchema } from './objects/FeatureOrderByWithRelationInput.schema'
import { FeatureWhereInputObjectSchema } from './objects/FeatureWhereInput.schema'
import { FeatureWhereUniqueInputObjectSchema } from './objects/FeatureWhereUniqueInput.schema'
import { FeatureScalarFieldEnumSchema } from './enums/FeatureScalarFieldEnum.schema'

export const FeatureFindFirstSchema = z.object({
  select: FeatureSelectObjectSchema.optional(),
  include: FeatureIncludeObjectSchema.optional(),
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
  distinct: z.array(FeatureScalarFieldEnumSchema).optional(),
})
