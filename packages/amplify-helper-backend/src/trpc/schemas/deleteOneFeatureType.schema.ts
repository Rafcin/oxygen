import { z } from 'zod'
import { FeatureTypeSelectObjectSchema } from './objects/FeatureTypeSelect.schema'
import { FeatureTypeIncludeObjectSchema } from './objects/FeatureTypeInclude.schema'
import { FeatureTypeWhereUniqueInputObjectSchema } from './objects/FeatureTypeWhereUniqueInput.schema'

export const FeatureTypeDeleteOneSchema = z.object({
  select: FeatureTypeSelectObjectSchema.optional(),
  include: FeatureTypeIncludeObjectSchema.optional(),
  where: FeatureTypeWhereUniqueInputObjectSchema,
})
