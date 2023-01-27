import { z } from 'zod'
import { FeatureCreateManyInputObjectSchema } from './objects/FeatureCreateManyInput.schema'

export const FeatureCreateManySchema = z.object({
  data: z.union([
    FeatureCreateManyInputObjectSchema,
    z.array(FeatureCreateManyInputObjectSchema),
  ]),
})
