import { z } from 'zod'
import { AccessLevelRoleSelectObjectSchema } from './objects/AccessLevelRoleSelect.schema'
import { AccessLevelRoleIncludeObjectSchema } from './objects/AccessLevelRoleInclude.schema'
import { AccessLevelRoleOrderByWithRelationInputObjectSchema } from './objects/AccessLevelRoleOrderByWithRelationInput.schema'
import { AccessLevelRoleWhereInputObjectSchema } from './objects/AccessLevelRoleWhereInput.schema'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './objects/AccessLevelRoleWhereUniqueInput.schema'
import { AccessLevelRoleScalarFieldEnumSchema } from './enums/AccessLevelRoleScalarFieldEnum.schema'

export const AccessLevelRoleFindManySchema = z.object({
  select: z.lazy(() => AccessLevelRoleSelectObjectSchema.optional()),
  include: z.lazy(() => AccessLevelRoleIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      AccessLevelRoleOrderByWithRelationInputObjectSchema,
      AccessLevelRoleOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AccessLevelRoleWhereInputObjectSchema.optional(),
  cursor: AccessLevelRoleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AccessLevelRoleScalarFieldEnumSchema).optional(),
})
