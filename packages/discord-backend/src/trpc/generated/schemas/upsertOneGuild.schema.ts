import { z } from 'zod';
import { GuildWhereUniqueInputObjectSchema } from './objects/GuildWhereUniqueInput.schema';
import { GuildCreateInputObjectSchema } from './objects/GuildCreateInput.schema';
import { GuildUncheckedCreateInputObjectSchema } from './objects/GuildUncheckedCreateInput.schema';
import { GuildUpdateInputObjectSchema } from './objects/GuildUpdateInput.schema';
import { GuildUncheckedUpdateInputObjectSchema } from './objects/GuildUncheckedUpdateInput.schema';

export const GuildUpsertSchema = z.object({
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
