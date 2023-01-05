import { z } from 'zod';
import { SanitySelectObjectSchema } from './objects/SanitySelect.schema';
import { SanityUpdateInputObjectSchema } from './objects/SanityUpdateInput.schema';
import { SanityUncheckedUpdateInputObjectSchema } from './objects/SanityUncheckedUpdateInput.schema';
import { SanityWhereUniqueInputObjectSchema } from './objects/SanityWhereUniqueInput.schema';

export const SanityUpdateOneSchema = z.object({
  select: SanitySelectObjectSchema.optional(),
  data: z.union([
    SanityUpdateInputObjectSchema,
    SanityUncheckedUpdateInputObjectSchema,
  ]),
  where: SanityWhereUniqueInputObjectSchema,
});
