import { z } from 'zod'
import { AccessLevelSelectObjectSchema } from './objects/AccessLevelSelect.schema'
import { AccessLevelIncludeObjectSchema } from './objects/AccessLevelInclude.schema'
import { AccessLevelOrderByWithRelationInputObjectSchema } from './objects/AccessLevelOrderByWithRelationInput.schema'
import { AccessLevelWhereInputObjectSchema } from './objects/AccessLevelWhereInput.schema'
import { AccessLevelWhereUniqueInputObjectSchema } from './objects/AccessLevelWhereUniqueInput.schema'
import { AccessLevelScalarFieldEnumSchema } from './enums/AccessLevelScalarFieldEnum.schema'

export const AccessLevelFindFirstSchema = z.object({
  select: AccessLevelSelectObjectSchema.optional(),
  include: AccessLevelIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      AccessLevelOrderByWithRelationInputObjectSchema,
      AccessLevelOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AccessLevelWhereInputObjectSchema.optional(),
  cursor: AccessLevelWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AccessLevelScalarFieldEnumSchema).optional(),
})
