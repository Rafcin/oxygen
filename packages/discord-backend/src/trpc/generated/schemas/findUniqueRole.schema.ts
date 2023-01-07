import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './objects/RoleWhereUniqueInput.schema';

export const RoleFindUniqueSchema = z.object({
  where: RoleWhereUniqueInputObjectSchema,
});
