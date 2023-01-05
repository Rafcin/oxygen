import { z } from 'zod';
import { RoleCreateManyInputObjectSchema } from './objects/RoleCreateManyInput.schema';

export const RoleCreateManySchema = z.object({
  data: z.union([
    RoleCreateManyInputObjectSchema,
    z.array(RoleCreateManyInputObjectSchema),
  ]),
});
