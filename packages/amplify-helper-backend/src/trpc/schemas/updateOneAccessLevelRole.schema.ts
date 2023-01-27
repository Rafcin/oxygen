import { z } from 'zod'
import { AccessLevelRoleSelectObjectSchema } from './objects/AccessLevelRoleSelect.schema'
import { AccessLevelRoleIncludeObjectSchema } from './objects/AccessLevelRoleInclude.schema'
import { AccessLevelRoleUpdateInputObjectSchema } from './objects/AccessLevelRoleUpdateInput.schema'
import { AccessLevelRoleUncheckedUpdateInputObjectSchema } from './objects/AccessLevelRoleUncheckedUpdateInput.schema'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './objects/AccessLevelRoleWhereUniqueInput.schema'

export const AccessLevelRoleUpdateOneSchema = z.object({
  select: AccessLevelRoleSelectObjectSchema.optional(),
  include: AccessLevelRoleIncludeObjectSchema.optional(),
  data: z.union([
    AccessLevelRoleUpdateInputObjectSchema,
    AccessLevelRoleUncheckedUpdateInputObjectSchema,
  ]),
  where: AccessLevelRoleWhereUniqueInputObjectSchema,
})
