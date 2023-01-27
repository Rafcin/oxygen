import { z } from 'zod'
import { FeatureTypeSelectObjectSchema } from './objects/FeatureTypeSelect.schema'
import { FeatureTypeIncludeObjectSchema } from './objects/FeatureTypeInclude.schema'
import { FeatureTypeUpdateInputObjectSchema } from './objects/FeatureTypeUpdateInput.schema'
import { FeatureTypeUncheckedUpdateInputObjectSchema } from './objects/FeatureTypeUncheckedUpdateInput.schema'
import { FeatureTypeWhereUniqueInputObjectSchema } from './objects/FeatureTypeWhereUniqueInput.schema'

export const FeatureTypeUpdateOneSchema = z.object({
  select: FeatureTypeSelectObjectSchema.optional(),
  include: FeatureTypeIncludeObjectSchema.optional(),
  data: z.union([
    FeatureTypeUpdateInputObjectSchema,
    FeatureTypeUncheckedUpdateInputObjectSchema,
  ]),
  where: FeatureTypeWhereUniqueInputObjectSchema,
})
