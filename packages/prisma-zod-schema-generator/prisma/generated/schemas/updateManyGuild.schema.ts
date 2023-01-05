import { z } from 'zod';
import { GuildUpdateManyMutationInputObjectSchema } from './objects/GuildUpdateManyMutationInput.schema';
import { GuildWhereInputObjectSchema } from './objects/GuildWhereInput.schema';

export const GuildUpdateManySchema = z.object({
  data: GuildUpdateManyMutationInputObjectSchema,
  where: GuildWhereInputObjectSchema.optional(),
});
