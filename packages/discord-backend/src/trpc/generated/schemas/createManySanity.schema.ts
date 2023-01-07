import { z } from 'zod';
import { SanityCreateManyInputObjectSchema } from './objects/SanityCreateManyInput.schema';

export const SanityCreateManySchema = z.object({
  data: z.union([
    SanityCreateManyInputObjectSchema,
    z.array(SanityCreateManyInputObjectSchema),
  ]),
});
