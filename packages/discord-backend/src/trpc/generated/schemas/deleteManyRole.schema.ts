import { z } from 'zod';
import { RoleWhereInputObjectSchema } from './objects/RoleWhereInput.schema';

export const RoleDeleteManySchema = z.object({
  where: RoleWhereInputObjectSchema.optional(),
});
