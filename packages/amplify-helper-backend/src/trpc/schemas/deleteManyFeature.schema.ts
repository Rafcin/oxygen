import { z } from 'zod'
import { FeatureWhereInputObjectSchema } from './objects/FeatureWhereInput.schema'

export const FeatureDeleteManySchema = z.object({
  where: FeatureWhereInputObjectSchema.optional(),
})
