import { z } from 'zod'
import { AccessLevelRoleSelectObjectSchema } from './objects/AccessLevelRoleSelect.schema'
import { AccessLevelRoleIncludeObjectSchema } from './objects/AccessLevelRoleInclude.schema'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './objects/AccessLevelRoleWhereUniqueInput.schema'
import { AccessLevelRoleCreateInputObjectSchema } from './objects/AccessLevelRoleCreateInput.schema'
import { AccessLevelRoleUncheckedCreateInputObjectSchema } from './objects/AccessLevelRoleUncheckedCreateInput.schema'
import { AccessLevelRoleUpdateInputObjectSchema } from './objects/AccessLevelRoleUpdateInput.schema'
import { AccessLevelRoleUncheckedUpdateInputObjectSchema } from './objects/AccessLevelRoleUncheckedUpdateInput.schema'

export const AccessLevelRoleUpsertSchema = z.object({
  select: AccessLevelRoleSelectObjectSchema.optional(),
  include: AccessLevelRoleIncludeObjectSchema.optional(),
  where: AccessLevelRoleWhereUniqueInputObjectSchema,
  create: z.union([
    AccessLevelRoleCreateInputObjectSchema,
    AccessLevelRoleUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AccessLevelRoleUpdateInputObjectSchema,
    AccessLevelRoleUncheckedUpdateInputObjectSchema,
  ]),
})
