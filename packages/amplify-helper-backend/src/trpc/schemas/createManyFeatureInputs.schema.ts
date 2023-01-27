import { z } from 'zod'
import { FeatureInputsCreateManyInputObjectSchema } from './objects/FeatureInputsCreateManyInput.schema'

export const FeatureInputsCreateManySchema = z.object({
  data: z.union([
    FeatureInputsCreateManyInputObjectSchema,
    z.array(FeatureInputsCreateManyInputObjectSchema),
  ]),
})
