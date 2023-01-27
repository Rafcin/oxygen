import { z } from 'zod'
import { FeatureTypeUpdateManyMutationInputObjectSchema } from './objects/FeatureTypeUpdateManyMutationInput.schema'
import { FeatureTypeWhereInputObjectSchema } from './objects/FeatureTypeWhereInput.schema'

export const FeatureTypeUpdateManySchema = z.object({
  data: FeatureTypeUpdateManyMutationInputObjectSchema,
  where: FeatureTypeWhereInputObjectSchema.optional(),
})
