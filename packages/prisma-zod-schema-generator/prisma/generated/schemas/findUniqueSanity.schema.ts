import { z } from 'zod';
import { SanitySelectObjectSchema } from './objects/SanitySelect.schema';
import { SanityWhereUniqueInputObjectSchema } from './objects/SanityWhereUniqueInput.schema';

export const SanityFindUniqueSchema = z.object({
  select: SanitySelectObjectSchema.optional(),
  where: SanityWhereUniqueInputObjectSchema,
});
