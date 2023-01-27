import { z } from 'zod'
import { FeatureTypeSelectObjectSchema } from './objects/FeatureTypeSelect.schema'
import { FeatureTypeIncludeObjectSchema } from './objects/FeatureTypeInclude.schema'
import { FeatureTypeWhereUniqueInputObjectSchema } from './objects/FeatureTypeWhereUniqueInput.schema'
import { FeatureTypeCreateInputObjectSchema } from './objects/FeatureTypeCreateInput.schema'
import { FeatureTypeUncheckedCreateInputObjectSchema } from './objects/FeatureTypeUncheckedCreateInput.schema'
import { FeatureTypeUpdateInputObjectSchema } from './objects/FeatureTypeUpdateInput.schema'
import { FeatureTypeUncheckedUpdateInputObjectSchema } from './objects/FeatureTypeUncheckedUpdateInput.schema'

export const FeatureTypeUpsertSchema = z.object({
  select: FeatureTypeSelectObjectSchema.optional(),
  include: FeatureTypeIncludeObjectSchema.optional(),
  where: FeatureTypeWhereUniqueInputObjectSchema,
  create: z.union([
    FeatureTypeCreateInputObjectSchema,
    FeatureTypeUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    FeatureTypeUpdateInputObjectSchema,
    FeatureTypeUncheckedUpdateInputObjectSchema,
  ]),
})
