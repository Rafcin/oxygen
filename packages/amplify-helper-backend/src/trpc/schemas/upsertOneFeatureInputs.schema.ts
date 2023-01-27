import { z } from 'zod'
import { FeatureInputsSelectObjectSchema } from './objects/FeatureInputsSelect.schema'
import { FeatureInputsIncludeObjectSchema } from './objects/FeatureInputsInclude.schema'
import { FeatureInputsWhereUniqueInputObjectSchema } from './objects/FeatureInputsWhereUniqueInput.schema'
import { FeatureInputsCreateInputObjectSchema } from './objects/FeatureInputsCreateInput.schema'
import { FeatureInputsUncheckedCreateInputObjectSchema } from './objects/FeatureInputsUncheckedCreateInput.schema'
import { FeatureInputsUpdateInputObjectSchema } from './objects/FeatureInputsUpdateInput.schema'
import { FeatureInputsUncheckedUpdateInputObjectSchema } from './objects/FeatureInputsUncheckedUpdateInput.schema'

export const FeatureInputsUpsertSchema = z.object({
  select: FeatureInputsSelectObjectSchema.optional(),
  include: FeatureInputsIncludeObjectSchema.optional(),
  where: FeatureInputsWhereUniqueInputObjectSchema,
  create: z.union([
    FeatureInputsCreateInputObjectSchema,
    FeatureInputsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    FeatureInputsUpdateInputObjectSchema,
    FeatureInputsUncheckedUpdateInputObjectSchema,
  ]),
})
