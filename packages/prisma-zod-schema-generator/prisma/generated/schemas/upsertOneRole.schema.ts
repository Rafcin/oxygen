import { z } from 'zod';
import { RoleSelectObjectSchema } from './objects/RoleSelect.schema';
import { RoleIncludeObjectSchema } from './objects/RoleInclude.schema';
import { RoleWhereUniqueInputObjectSchema } from './objects/RoleWhereUniqueInput.schema';
import { RoleCreateInputObjectSchema } from './objects/RoleCreateInput.schema';
import { RoleUncheckedCreateInputObjectSchema } from './objects/RoleUncheckedCreateInput.schema';
import { RoleUpdateInputObjectSchema } from './objects/RoleUpdateInput.schema';
import { RoleUncheckedUpdateInputObjectSchema } from './objects/RoleUncheckedUpdateInput.schema';

export const RoleUpsertSchema = z.object({
  select: RoleSelectObjectSchema.optional(),
  include: RoleIncludeObjectSchema.optional(),
  where: RoleWhereUniqueInputObjectSchema,
  create: z.union([
    RoleCreateInputObjectSchema,
    RoleUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RoleUpdateInputObjectSchema,
    RoleUncheckedUpdateInputObjectSchema,
  ]),
});
