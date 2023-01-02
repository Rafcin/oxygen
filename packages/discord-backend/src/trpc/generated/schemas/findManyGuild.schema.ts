import { z } from 'zod';
import { GuildSelectObjectSchema } from './objects/GuildSelect.schema';
import { GuildIncludeObjectSchema } from './objects/GuildInclude.schema';
import { GuildOrderByWithRelationInputObjectSchema } from './objects/GuildOrderByWithRelationInput.schema';
import { GuildWhereInputObjectSchema } from './objects/GuildWhereInput.schema';
import { GuildWhereUniqueInputObjectSchema } from './objects/GuildWhereUniqueInput.schema';
import { GuildScalarFieldEnumSchema } from './enums/GuildScalarFieldEnum.schema';

export const GuildFindManySchema = z.object({
  select: z.lazy(() => GuildSelectObjectSchema.optional()),
  include: z.lazy(() => GuildIncludeObjectSchema.optional()),
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
