import { z } from 'zod';
import { GuildSelectObjectSchema } from './objects/GuildSelect.schema';
import { GuildIncludeObjectSchema } from './objects/GuildInclude.schema';
import { GuildUpdateInputObjectSchema } from './objects/GuildUpdateInput.schema';
import { GuildUncheckedUpdateInputObjectSchema } from './objects/GuildUncheckedUpdateInput.schema';
import { GuildWhereUniqueInputObjectSchema } from './objects/GuildWhereUniqueInput.schema';

export const GuildUpdateOneSchema = z.object({
  select: GuildSelectObjectSchema.optional(),
  include: GuildIncludeObjectSchema.optional(),
  data: z.union([
    GuildUpdateInputObjectSchema,
    GuildUncheckedUpdateInputObjectSchema,
  ]),
  where: GuildWhereUniqueInputObjectSchema,
});
