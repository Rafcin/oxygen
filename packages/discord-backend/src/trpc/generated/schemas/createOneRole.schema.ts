import { z } from 'zod';
import { RoleSelectObjectSchema } from './objects/RoleSelect.schema';
import { RoleIncludeObjectSchema } from './objects/RoleInclude.schema';
import { RoleCreateInputObjectSchema } from './objects/RoleCreateInput.schema';
import { RoleUncheckedCreateInputObjectSchema } from './objects/RoleUncheckedCreateInput.schema';

export const RoleCreateOneSchema = z.object({
  select: RoleSelectObjectSchema.optional(),
  include: RoleIncludeObjectSchema.optional(),
  data: z.union([
    RoleCreateInputObjectSchema,
    RoleUncheckedCreateInputObjectSchema,
  ]),
});
