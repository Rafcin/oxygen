import { z } from 'zod'
import { FeatureTypeCreateManyInputObjectSchema } from './objects/FeatureTypeCreateManyInput.schema'

export const FeatureTypeCreateManySchema = z.object({
  data: z.union([
    FeatureTypeCreateManyInputObjectSchema,
    z.array(FeatureTypeCreateManyInputObjectSchema),
  ]),
})
