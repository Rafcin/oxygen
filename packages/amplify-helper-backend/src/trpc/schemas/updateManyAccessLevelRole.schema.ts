import { z } from 'zod'
import { AccessLevelRoleUpdateManyMutationInputObjectSchema } from './objects/AccessLevelRoleUpdateManyMutationInput.schema'
import { AccessLevelRoleWhereInputObjectSchema } from './objects/AccessLevelRoleWhereInput.schema'

export const AccessLevelRoleUpdateManySchema = z.object({
  data: AccessLevelRoleUpdateManyMutationInputObjectSchema,
  where: AccessLevelRoleWhereInputObjectSchema.optional(),
})
