import { z } from 'zod';
import { RoleUpdateManyMutationInputObjectSchema } from './objects/RoleUpdateManyMutationInput.schema';
import { RoleWhereInputObjectSchema } from './objects/RoleWhereInput.schema';

export const RoleUpdateManySchema = z.object({
  data: RoleUpdateManyMutationInputObjectSchema,
  where: RoleWhereInputObjectSchema.optional(),
});
