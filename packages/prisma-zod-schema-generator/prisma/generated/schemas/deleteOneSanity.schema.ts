import { z } from 'zod';
import { SanitySelectObjectSchema } from './objects/SanitySelect.schema';
import { SanityWhereUniqueInputObjectSchema } from './objects/SanityWhereUniqueInput.schema';

export const SanityDeleteOneSchema = z.object({
  select: SanitySelectObjectSchema.optional(),
  where: SanityWhereUniqueInputObjectSchema,
});
