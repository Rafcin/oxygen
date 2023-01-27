import { z } from 'zod'
import { FeatureSelectObjectSchema } from './objects/FeatureSelect.schema'
import { FeatureIncludeObjectSchema } from './objects/FeatureInclude.schema'
import { FeatureUpdateInputObjectSchema } from './objects/FeatureUpdateInput.schema'
import { FeatureUncheckedUpdateInputObjectSchema } from './objects/FeatureUncheckedUpdateInput.schema'
import { FeatureWhereUniqueInputObjectSchema } from './objects/FeatureWhereUniqueInput.schema'

export const FeatureUpdateOneSchema = z.object({
  select: FeatureSelectObjectSchema.optional(),
  include: FeatureIncludeObjectSchema.optional(),
  data: z.union([
    FeatureUpdateInputObjectSchema,
    FeatureUncheckedUpdateInputObjectSchema,
  ]),
  where: FeatureWhereUniqueInputObjectSchema,
})
