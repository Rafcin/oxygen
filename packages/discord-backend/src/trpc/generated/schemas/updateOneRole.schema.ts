import { z } from 'zod';
import { RoleSelectObjectSchema } from './objects/RoleSelect.schema';
import { RoleIncludeObjectSchema } from './objects/RoleInclude.schema';
import { RoleUpdateInputObjectSchema } from './objects/RoleUpdateInput.schema';
import { RoleUncheckedUpdateInputObjectSchema } from './objects/RoleUncheckedUpdateInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './objects/RoleWhereUniqueInput.schema';

export const RoleUpdateOneSchema = z.object({
  select: RoleSelectObjectSchema.optional(),
  include: RoleIncludeObjectSchema.optional(),
  data: z.union([
    RoleUpdateInputObjectSchema,
    RoleUncheckedUpdateInputObjectSchema,
  ]),
  where: RoleWhereUniqueInputObjectSchema,
});
