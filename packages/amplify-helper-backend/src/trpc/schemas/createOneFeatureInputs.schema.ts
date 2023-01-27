import { z } from 'zod'
import { FeatureInputsSelectObjectSchema } from './objects/FeatureInputsSelect.schema'
import { FeatureInputsIncludeObjectSchema } from './objects/FeatureInputsInclude.schema'
import { FeatureInputsCreateInputObjectSchema } from './objects/FeatureInputsCreateInput.schema'
import { FeatureInputsUncheckedCreateInputObjectSchema } from './objects/FeatureInputsUncheckedCreateInput.schema'

export const FeatureInputsCreateOneSchema = z.object({
  select: FeatureInputsSelectObjectSchema.optional(),
  include: FeatureInputsIncludeObjectSchema.optional(),
  data: z.union([
    FeatureInputsCreateInputObjectSchema,
    FeatureInputsUncheckedCreateInputObjectSchema,
  ]),
})
