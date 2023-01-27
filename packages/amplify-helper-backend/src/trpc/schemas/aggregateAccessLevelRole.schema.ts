import { z } from 'zod'
import { AccessLevelRoleOrderByWithRelationInputObjectSchema } from './objects/AccessLevelRoleOrderByWithRelationInput.schema'
import { AccessLevelRoleWhereInputObjectSchema } from './objects/AccessLevelRoleWhereInput.schema'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './objects/AccessLevelRoleWhereUniqueInput.schema'
import { AccessLevelRoleCountAggregateInputObjectSchema } from './objects/AccessLevelRoleCountAggregateInput.schema'
import { AccessLevelRoleMinAggregateInputObjectSchema } from './objects/AccessLevelRoleMinAggregateInput.schema'
import { AccessLevelRoleMaxAggregateInputObjectSchema } from './objects/AccessLevelRoleMaxAggregateInput.schema'

export const AccessLevelRoleAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), AccessLevelRoleCountAggregateInputObjectSchema])
    .optional(),
  _min: AccessLevelRoleMinAggregateInputObjectSchema.optional(),
  _max: AccessLevelRoleMaxAggregateInputObjectSchema.optional(),
})
