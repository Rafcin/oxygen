import { z } from 'zod'
import { FeatureSelectObjectSchema } from './objects/FeatureSelect.schema'
import { FeatureIncludeObjectSchema } from './objects/FeatureInclude.schema'
import { FeatureCreateInputObjectSchema } from './objects/FeatureCreateInput.schema'
import { FeatureUncheckedCreateInputObjectSchema } from './objects/FeatureUncheckedCreateInput.schema'

export const FeatureCreateOneSchema = z.object({
  select: FeatureSelectObjectSchema.optional(),
  include: FeatureIncludeObjectSchema.optional(),
  data: z.union([
    FeatureCreateInputObjectSchema,
    FeatureUncheckedCreateInputObjectSchema,
  ]),
})
