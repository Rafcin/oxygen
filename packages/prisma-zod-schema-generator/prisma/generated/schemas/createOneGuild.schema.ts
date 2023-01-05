import { z } from 'zod';
import { GuildSelectObjectSchema } from './objects/GuildSelect.schema';
import { GuildIncludeObjectSchema } from './objects/GuildInclude.schema';
import { GuildCreateInputObjectSchema } from './objects/GuildCreateInput.schema';
import { GuildUncheckedCreateInputObjectSchema } from './objects/GuildUncheckedCreateInput.schema';

export const GuildCreateOneSchema = z.object({
  select: GuildSelectObjectSchema.optional(),
  include: GuildIncludeObjectSchema.optional(),
  data: z.union([
    GuildCreateInputObjectSchema,
    GuildUncheckedCreateInputObjectSchema,
  ]),
});
