import { z } from 'zod';
import { SanityWhereUniqueInputObjectSchema } from './objects/SanityWhereUniqueInput.schema';

export const SanityFindUniqueSchema = z.object({
  where: SanityWhereUniqueInputObjectSchema,
});
