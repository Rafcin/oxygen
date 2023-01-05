import { z } from 'zod';
import { GuildUpdateInputObjectSchema } from './objects/GuildUpdateInput.schema';
import { GuildUncheckedUpdateInputObjectSchema } from './objects/GuildUncheckedUpdateInput.schema';
import { GuildWhereUniqueInputObjectSchema } from './objects/GuildWhereUniqueInput.schema';

export const GuildUpdateOneSchema = z.object({
  data: z.union([
    GuildUpdateInputObjectSchema,
    GuildUncheckedUpdateInputObjectSchema,
  ]),
  where: GuildWhereUniqueInputObjectSchema,
});
