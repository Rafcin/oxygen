import { z } from 'zod'
import { AccessLevelRoleWhereInputObjectSchema } from './objects/AccessLevelRoleWhereInput.schema'

export const AccessLevelRoleDeleteManySchema = z.object({
  where: AccessLevelRoleWhereInputObjectSchema.optional(),
})
