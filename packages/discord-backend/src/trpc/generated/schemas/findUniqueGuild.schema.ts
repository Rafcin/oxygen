import { z } from 'zod';
import { GuildSelectObjectSchema } from './objects/GuildSelect.schema';
import { GuildIncludeObjectSchema } from './objects/GuildInclude.schema';
import { GuildWhereUniqueInputObjectSchema } from './objects/GuildWhereUniqueInput.schema';

export const GuildFindUniqueSchema = z.object({
  select: GuildSelectObjectSchema.optional(),
  include: GuildIncludeObjectSchema.optional(),
  where: GuildWhereUniqueInputObjectSchema,
});
