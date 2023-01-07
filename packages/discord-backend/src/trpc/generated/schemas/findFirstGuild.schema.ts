import { z } from 'zod';
import { GuildOrderByWithRelationInputObjectSchema } from './objects/GuildOrderByWithRelationInput.schema';
import { GuildWhereInputObjectSchema } from './objects/GuildWhereInput.schema';
import { GuildWhereUniqueInputObjectSchema } from './objects/GuildWhereUniqueInput.schema';
import { GuildScalarFieldEnumSchema } from './enums/GuildScalarFieldEnum.schema';

export const GuildFindFirstSchema = z.object({
  orderBy: z
    .union([
      GuildOrderByWithRelationInputObjectSchema,
      GuildOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GuildWhereInputObjectSchema.optional(),
  cursor: GuildWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(GuildScalarFieldEnumSchema).optional(),
});
