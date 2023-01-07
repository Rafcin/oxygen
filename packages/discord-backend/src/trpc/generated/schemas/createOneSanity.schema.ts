import { z } from 'zod';
import { SanityCreateInputObjectSchema } from './objects/SanityCreateInput.schema';
import { SanityUncheckedCreateInputObjectSchema } from './objects/SanityUncheckedCreateInput.schema';

export const SanityCreateOneSchema = z.object({
  data: z.union([
    SanityCreateInputObjectSchema,
    SanityUncheckedCreateInputObjectSchema,
  ]),
});
