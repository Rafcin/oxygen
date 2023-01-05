import { z } from 'zod';
import { RoleWhereInputObjectSchema } from './objects/RoleWhereInput.schema';
import { RoleOrderByWithAggregationInputObjectSchema } from './objects/RoleOrderByWithAggregationInput.schema';
import { RoleScalarWhereWithAggregatesInputObjectSchema } from './objects/RoleScalarWhereWithAggregatesInput.schema';
import { RoleScalarFieldEnumSchema } from './enums/RoleScalarFieldEnum.schema';

export const RoleGroupBySchema = z.object({
  where: RoleWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RoleOrderByWithAggregationInputObjectSchema,
      RoleOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RoleScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RoleScalarFieldEnumSchema),
});
