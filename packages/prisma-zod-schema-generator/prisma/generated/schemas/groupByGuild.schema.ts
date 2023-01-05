import { z } from 'zod';
import { GuildWhereInputObjectSchema } from './objects/GuildWhereInput.schema';
import { GuildOrderByWithAggregationInputObjectSchema } from './objects/GuildOrderByWithAggregationInput.schema';
import { GuildScalarWhereWithAggregatesInputObjectSchema } from './objects/GuildScalarWhereWithAggregatesInput.schema';
import { GuildScalarFieldEnumSchema } from './enums/GuildScalarFieldEnum.schema';

export const GuildGroupBySchema = z.object({
  where: GuildWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      GuildOrderByWithAggregationInputObjectSchema,
      GuildOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: GuildScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(GuildScalarFieldEnumSchema),
});
