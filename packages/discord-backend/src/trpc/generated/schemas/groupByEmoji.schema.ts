import { z } from 'zod';
import { EmojiWhereInputObjectSchema } from './objects/EmojiWhereInput.schema';
import { EmojiOrderByWithAggregationInputObjectSchema } from './objects/EmojiOrderByWithAggregationInput.schema';
import { EmojiScalarWhereWithAggregatesInputObjectSchema } from './objects/EmojiScalarWhereWithAggregatesInput.schema';
import { EmojiScalarFieldEnumSchema } from './enums/EmojiScalarFieldEnum.schema';

export const EmojiGroupBySchema = z.object({
  where: EmojiWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      EmojiOrderByWithAggregationInputObjectSchema,
      EmojiOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: EmojiScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(EmojiScalarFieldEnumSchema),
});
