import { z } from 'zod'
import { AccessLevelRoleCreateManyInputObjectSchema } from './objects/AccessLevelRoleCreateManyInput.schema'

export const AccessLevelRoleCreateManySchema = z.object({
  data: z.union([
    AccessLevelRoleCreateManyInputObjectSchema,
    z.array(AccessLevelRoleCreateManyInputObjectSchema),
  ]),
})
