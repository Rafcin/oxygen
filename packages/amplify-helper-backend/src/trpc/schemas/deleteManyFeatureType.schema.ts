import { z } from 'zod'
import { FeatureTypeWhereInputObjectSchema } from './objects/FeatureTypeWhereInput.schema'

export const FeatureTypeDeleteManySchema = z.object({
  where: FeatureTypeWhereInputObjectSchema.optional(),
})
