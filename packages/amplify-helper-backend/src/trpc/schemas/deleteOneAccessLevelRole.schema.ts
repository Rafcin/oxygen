import { z } from 'zod'
import { AccessLevelRoleSelectObjectSchema } from './objects/AccessLevelRoleSelect.schema'
import { AccessLevelRoleIncludeObjectSchema } from './objects/AccessLevelRoleInclude.schema'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './objects/AccessLevelRoleWhereUniqueInput.schema'

export const AccessLevelRoleDeleteOneSchema = z.object({
  select: AccessLevelRoleSelectObjectSchema.optional(),
  include: AccessLevelRoleIncludeObjectSchema.optional(),
  where: AccessLevelRoleWhereUniqueInputObjectSchema,
})
