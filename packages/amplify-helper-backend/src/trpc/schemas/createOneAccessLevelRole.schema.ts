import { z } from 'zod'
import { AccessLevelRoleSelectObjectSchema } from './objects/AccessLevelRoleSelect.schema'
import { AccessLevelRoleIncludeObjectSchema } from './objects/AccessLevelRoleInclude.schema'
import { AccessLevelRoleCreateInputObjectSchema } from './objects/AccessLevelRoleCreateInput.schema'
import { AccessLevelRoleUncheckedCreateInputObjectSchema } from './objects/AccessLevelRoleUncheckedCreateInput.schema'

export const AccessLevelRoleCreateOneSchema = z.object({
  select: AccessLevelRoleSelectObjectSchema.optional(),
  include: AccessLevelRoleIncludeObjectSchema.optional(),
  data: z.union([
    AccessLevelRoleCreateInputObjectSchema,
    AccessLevelRoleUncheckedCreateInputObjectSchema,
  ]),
})
