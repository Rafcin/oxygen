import { z } from 'zod'
import { FeatureInputsUpdateManyMutationInputObjectSchema } from './objects/FeatureInputsUpdateManyMutationInput.schema'
import { FeatureInputsWhereInputObjectSchema } from './objects/FeatureInputsWhereInput.schema'

export const FeatureInputsUpdateManySchema = z.object({
  data: FeatureInputsUpdateManyMutationInputObjectSchema,
  where: FeatureInputsWhereInputObjectSchema.optional(),
})
