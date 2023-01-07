import { z } from 'zod';
import { GuildCreateInputObjectSchema } from './objects/GuildCreateInput.schema';
import { GuildUncheckedCreateInputObjectSchema } from './objects/GuildUncheckedCreateInput.schema';

export const GuildCreateOneSchema = z.object({
  data: z.union([
    GuildCreateInputObjectSchema,
    GuildUncheckedCreateInputObjectSchema,
  ]),
});
