import { z } from 'zod'
import { AccessLevelCreateManyInputObjectSchema } from './objects/AccessLevelCreateManyInput.schema'

export const AccessLevelCreateManySchema = z.object({
  data: z.union([
    AccessLevelCreateManyInputObjectSchema,
    z.array(AccessLevelCreateManyInputObjectSchema),
  ]),
})
