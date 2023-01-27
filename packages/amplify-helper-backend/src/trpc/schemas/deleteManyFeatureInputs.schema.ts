import { z } from 'zod'
import { FeatureInputsWhereInputObjectSchema } from './objects/FeatureInputsWhereInput.schema'

export const FeatureInputsDeleteManySchema = z.object({
  where: FeatureInputsWhereInputObjectSchema.optional(),
})
