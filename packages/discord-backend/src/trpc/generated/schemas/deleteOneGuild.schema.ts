import { z } from 'zod';
import { GuildWhereUniqueInputObjectSchema } from './objects/GuildWhereUniqueInput.schema';

export const GuildDeleteOneSchema = z.object({
  where: GuildWhereUniqueInputObjectSchema,
});
