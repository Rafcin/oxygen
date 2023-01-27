import { z } from 'zod'
import { FeatureInputsSelectObjectSchema } from './objects/FeatureInputsSelect.schema'
import { FeatureInputsIncludeObjectSchema } from './objects/FeatureInputsInclude.schema'
import { FeatureInputsWhereUniqueInputObjectSchema } from './objects/FeatureInputsWhereUniqueInput.schema'

export const FeatureInputsFindUniqueSchema = z.object({
  select: FeatureInputsSelectObjectSchema.optional(),
  include: FeatureInputsIncludeObjectSchema.optional(),
  where: FeatureInputsWhereUniqueInputObjectSchema,
})
