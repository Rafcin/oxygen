import { z } from 'zod'
import { FeatureTypeSelectObjectSchema } from './objects/FeatureTypeSelect.schema'
import { FeatureTypeIncludeObjectSchema } from './objects/FeatureTypeInclude.schema'
import { FeatureTypeCreateInputObjectSchema } from './objects/FeatureTypeCreateInput.schema'
import { FeatureTypeUncheckedCreateInputObjectSchema } from './objects/FeatureTypeUncheckedCreateInput.schema'

export const FeatureTypeCreateOneSchema = z.object({
  select: FeatureTypeSelectObjectSchema.optional(),
  include: FeatureTypeIncludeObjectSchema.optional(),
  data: z.union([
    FeatureTypeCreateInputObjectSchema,
    FeatureTypeUncheckedCreateInputObjectSchema,
  ]),
})
