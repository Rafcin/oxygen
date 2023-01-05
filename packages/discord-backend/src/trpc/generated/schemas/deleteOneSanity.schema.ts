import { z } from 'zod';
import { SanityWhereUniqueInputObjectSchema } from './objects/SanityWhereUniqueInput.schema';

export const SanityDeleteOneSchema = z.object({
  where: SanityWhereUniqueInputObjectSchema,
});
