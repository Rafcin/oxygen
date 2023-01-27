import { z } from 'zod'
import { FeatureTypeSelectObjectSchema } from './objects/FeatureTypeSelect.schema'
import { FeatureTypeIncludeObjectSchema } from './objects/FeatureTypeInclude.schema'
import { FeatureTypeOrderByWithRelationInputObjectSchema } from './objects/FeatureTypeOrderByWithRelationInput.schema'
import { FeatureTypeWhereInputObjectSchema } from './objects/FeatureTypeWhereInput.schema'
import { FeatureTypeWhereUniqueInputObjectSchema } from './objects/FeatureTypeWhereUniqueInput.schema'
import { FeatureTypeScalarFieldEnumSchema } from './enums/FeatureTypeScalarFieldEnum.schema'

export const FeatureTypeFindFirstSchema = z.object({
  select: FeatureTypeSelectObjectSchema.optional(),
  include: FeatureTypeIncludeObjectSchema.optional(),
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
  distinct: z.array(FeatureTypeScalarFieldEnumSchema).optional(),
})
