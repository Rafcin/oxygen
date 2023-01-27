import { z } from 'zod'
import { FeatureUpdateManyMutationInputObjectSchema } from './objects/FeatureUpdateManyMutationInput.schema'
import { FeatureWhereInputObjectSchema } from './objects/FeatureWhereInput.schema'

export const FeatureUpdateManySchema = z.object({
  data: FeatureUpdateManyMutationInputObjectSchema,
  where: FeatureWhereInputObjectSchema.optional(),
})
