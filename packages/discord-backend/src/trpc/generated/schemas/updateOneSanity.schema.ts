import { z } from 'zod';
import { SanityUpdateInputObjectSchema } from './objects/SanityUpdateInput.schema';
import { SanityUncheckedUpdateInputObjectSchema } from './objects/SanityUncheckedUpdateInput.schema';
import { SanityWhereUniqueInputObjectSchema } from './objects/SanityWhereUniqueInput.schema';

export const SanityUpdateOneSchema = z.object({
  data: z.union([
    SanityUpdateInputObjectSchema,
    SanityUncheckedUpdateInputObjectSchema,
  ]),
  where: SanityWhereUniqueInputObjectSchema,
});
