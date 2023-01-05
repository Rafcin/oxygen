import { z } from 'zod';
import { SanitySelectObjectSchema } from './objects/SanitySelect.schema';
import { SanityCreateInputObjectSchema } from './objects/SanityCreateInput.schema';
import { SanityUncheckedCreateInputObjectSchema } from './objects/SanityUncheckedCreateInput.schema';

export const SanityCreateOneSchema = z.object({
  select: SanitySelectObjectSchema.optional(),
  data: z.union([
    SanityCreateInputObjectSchema,
    SanityUncheckedCreateInputObjectSchema,
  ]),
});
