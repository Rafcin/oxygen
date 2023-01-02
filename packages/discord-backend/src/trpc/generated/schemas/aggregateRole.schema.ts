import { z } from 'zod';
import { RoleOrderByWithRelationInputObjectSchema } from './objects/RoleOrderByWithRelationInput.schema';
import { RoleWhereInputObjectSchema } from './objects/RoleWhereInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './objects/RoleWhereUniqueInput.schema';
import { RoleCountAggregateInputObjectSchema } from './objects/RoleCountAggregateInput.schema';
import { RoleMinAggregateInputObjectSchema } from './objects/RoleMinAggregateInput.schema';
import { RoleMaxAggregateInputObjectSchema } from './objects/RoleMaxAggregateInput.schema';
import { RoleAvgAggregateInputObjectSchema } from './objects/RoleAvgAggregateInput.schema';
import { RoleSumAggregateInputObjectSchema } from './objects/RoleSumAggregateInput.schema';

export const RoleAggregateSchema = z.object({
  orderBy: z
    .union([
      RoleOrderByWithRelationInputObjectSchema,
      RoleOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RoleWhereInputObjectSchema.optional(),
  cursor: RoleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), RoleCountAggregateInputObjectSchema])
    .optional(),
  _min: RoleMinAggregateInputObjectSchema.optional(),
  _max: RoleMaxAggregateInputObjectSchema.optional(),
  _avg: RoleAvgAggregateInputObjectSchema.optional(),
  _sum: RoleSumAggregateInputObjectSchema.optional(),
});
