import { z } from 'zod';
import { GuildWhereUniqueInputObjectSchema } from './objects/GuildWhereUniqueInput.schema';

export const GuildFindUniqueSchema = z.object({
  where: GuildWhereUniqueInputObjectSchema,
});
