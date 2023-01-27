import { z } from 'zod'
import { AccessLevelRoleWhereInputObjectSchema } from './objects/AccessLevelRoleWhereInput.schema'
import { AccessLevelRoleOrderByWithAggregationInputObjectSchema } from './objects/AccessLevelRoleOrderByWithAggregationInput.schema'
import { AccessLevelRoleScalarWhereWithAggregatesInputObjectSchema } from './objects/AccessLevelRoleScalarWhereWithAggregatesInput.schema'
import { AccessLevelRoleScalarFieldEnumSchema } from './enums/AccessLevelRoleScalarFieldEnum.schema'

export const AccessLevelRoleGroupBySchema = z.object({
  where: AccessLevelRoleWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AccessLevelRoleOrderByWithAggregationInputObjectSchema,
      AccessLevelRoleOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: AccessLevelRoleScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AccessLevelRoleScalarFieldEnumSchema),
})
