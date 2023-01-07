import { z } from 'zod';
import { RoleCreateInputObjectSchema } from './objects/RoleCreateInput.schema';
import { RoleUncheckedCreateInputObjectSchema } from './objects/RoleUncheckedCreateInput.schema';

export const RoleCreateOneSchema = z.object({
  data: z.union([
    RoleCreateInputObjectSchema,
    RoleUncheckedCreateInputObjectSchema,
  ]),
});
