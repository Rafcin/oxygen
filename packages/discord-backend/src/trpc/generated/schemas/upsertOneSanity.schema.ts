import { z } from 'zod';
import { SanityWhereUniqueInputObjectSchema } from './objects/SanityWhereUniqueInput.schema';
import { SanityCreateInputObjectSchema } from './objects/SanityCreateInput.schema';
import { SanityUncheckedCreateInputObjectSchema } from './objects/SanityUncheckedCreateInput.schema';
import { SanityUpdateInputObjectSchema } from './objects/SanityUpdateInput.schema';
import { SanityUncheckedUpdateInputObjectSchema } from './objects/SanityUncheckedUpdateInput.schema';

export const SanityUpsertSchema = z.object({
  where: SanityWhereUniqueInputObjectSchema,
  create: z.union([
    SanityCreateInputObjectSchema,
    SanityUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SanityUpdateInputObjectSchema,
    SanityUncheckedUpdateInputObjectSchema,
  ]),
});
