import { z } from 'zod'
import { FeatureSelectObjectSchema } from './objects/FeatureSelect.schema'
import { FeatureIncludeObjectSchema } from './objects/FeatureInclude.schema'
import { FeatureWhereUniqueInputObjectSchema } from './objects/FeatureWhereUniqueInput.schema'

export const FeatureDeleteOneSchema = z.object({
  select: FeatureSelectObjectSchema.optional(),
  include: FeatureIncludeObjectSchema.optional(),
  where: FeatureWhereUniqueInputObjectSchema,
})
