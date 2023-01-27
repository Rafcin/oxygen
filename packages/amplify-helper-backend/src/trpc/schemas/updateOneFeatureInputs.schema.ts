import { z } from 'zod'
import { FeatureInputsSelectObjectSchema } from './objects/FeatureInputsSelect.schema'
import { FeatureInputsIncludeObjectSchema } from './objects/FeatureInputsInclude.schema'
import { FeatureInputsUpdateInputObjectSchema } from './objects/FeatureInputsUpdateInput.schema'
import { FeatureInputsUncheckedUpdateInputObjectSchema } from './objects/FeatureInputsUncheckedUpdateInput.schema'
import { FeatureInputsWhereUniqueInputObjectSchema } from './objects/FeatureInputsWhereUniqueInput.schema'

export const FeatureInputsUpdateOneSchema = z.object({
  select: FeatureInputsSelectObjectSchema.optional(),
  include: FeatureInputsIncludeObjectSchema.optional(),
  data: z.union([
    FeatureInputsUpdateInputObjectSchema,
    FeatureInputsUncheckedUpdateInputObjectSchema,
  ]),
  where: FeatureInputsWhereUniqueInputObjectSchema,
})
