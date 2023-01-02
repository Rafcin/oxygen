import { z } from 'zod';
import { RoleSelectObjectSchema } from './objects/RoleSelect.schema';
import { RoleIncludeObjectSchema } from './objects/RoleInclude.schema';
import { RoleWhereUniqueInputObjectSchema } from './objects/RoleWhereUniqueInput.schema';

export const RoleFindUniqueSchema = z.object({
  select: RoleSelectObjectSchema.optional(),
  include: RoleIncludeObjectSchema.optional(),
  where: RoleWhereUniqueInputObjectSchema,
});
