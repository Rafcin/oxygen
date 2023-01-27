import { z } from 'zod'
import { FeatureSelectObjectSchema } from './objects/FeatureSelect.schema'
import { FeatureIncludeObjectSchema } from './objects/FeatureInclude.schema'
import { FeatureWhereUniqueInputObjectSchema } from './objects/FeatureWhereUniqueInput.schema'
import { FeatureCreateInputObjectSchema } from './objects/FeatureCreateInput.schema'
import { FeatureUncheckedCreateInputObjectSchema } from './objects/FeatureUncheckedCreateInput.schema'
import { FeatureUpdateInputObjectSchema } from './objects/FeatureUpdateInput.schema'
import { FeatureUncheckedUpdateInputObjectSchema } from './objects/FeatureUncheckedUpdateInput.schema'

export const FeatureUpsertSchema = z.object({
  select: FeatureSelectObjectSchema.optional(),
  include: FeatureIncludeObjectSchema.optional(),
  where: FeatureWhereUniqueInputObjectSchema,
  create: z.union([
    FeatureCreateInputObjectSchema,
    FeatureUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    FeatureUpdateInputObjectSchema,
    FeatureUncheckedUpdateInputObjectSchema,
  ]),
})
