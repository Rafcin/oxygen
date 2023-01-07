import { z } from 'zod';
import { SanityWhereInputObjectSchema } from './objects/SanityWhereInput.schema';

export const SanityDeleteManySchema = z.object({
  where: SanityWhereInputObjectSchema.optional(),
});
