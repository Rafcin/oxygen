import { z } from 'zod';
import { RoleOrderByWithRelationInputObjectSchema } from './objects/RoleOrderByWithRelationInput.schema';
import { RoleWhereInputObjectSchema } from './objects/RoleWhereInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './objects/RoleWhereUniqueInput.schema';
import { RoleScalarFieldEnumSchema } from './enums/RoleScalarFieldEnum.schema';

export const RoleFindFirstSchema = z.object({
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
  distinct: z.array(RoleScalarFieldEnumSchema).optional(),
});
