import { z } from 'zod';
import { GuildSelectObjectSchema } from './objects/GuildSelect.schema';
import { GuildIncludeObjectSchema } from './objects/GuildInclude.schema';
import { GuildWhereUniqueInputObjectSchema } from './objects/GuildWhereUniqueInput.schema';
import { GuildCreateInputObjectSchema } from './objects/GuildCreateInput.schema';
import { GuildUncheckedCreateInputObjectSchema } from './objects/GuildUncheckedCreateInput.schema';
import { GuildUpdateInputObjectSchema } from './objects/GuildUpdateInput.schema';
import { GuildUncheckedUpdateInputObjectSchema } from './objects/GuildUncheckedUpdateInput.schema';

export const GuildUpsertSchema = z.object({
  select: GuildSelectObjectSchema.optional(),
  include: GuildIncludeObjectSchema.optional(),
  where: GuildWhereUniqueInputObjectSchema,
  create: z.union([
    GuildCreateInputObjectSchema,
    GuildUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    GuildUpdateInputObjectSchema,
    GuildUncheckedUpdateInputObjectSchema,
  ]),
});
