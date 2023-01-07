import { z } from 'zod';
import { RoleUpdateInputObjectSchema } from './objects/RoleUpdateInput.schema';
import { RoleUncheckedUpdateInputObjectSchema } from './objects/RoleUncheckedUpdateInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './objects/RoleWhereUniqueInput.schema';

export const RoleUpdateOneSchema = z.object({
  data: z.union([
    RoleUpdateInputObjectSchema,
    RoleUncheckedUpdateInputObjectSchema,
  ]),
  where: RoleWhereUniqueInputObjectSchema,
});
