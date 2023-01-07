import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './objects/RoleWhereUniqueInput.schema';

export const RoleDeleteOneSchema = z.object({
  where: RoleWhereUniqueInputObjectSchema,
});
