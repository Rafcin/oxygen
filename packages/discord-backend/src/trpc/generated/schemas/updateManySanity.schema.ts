import { z } from 'zod';
import { SanityUpdateManyMutationInputObjectSchema } from './objects/SanityUpdateManyMutationInput.schema';
import { SanityWhereInputObjectSchema } from './objects/SanityWhereInput.schema';

export const SanityUpdateManySchema = z.object({
  data: SanityUpdateManyMutationInputObjectSchema,
  where: SanityWhereInputObjectSchema.optional(),
});
