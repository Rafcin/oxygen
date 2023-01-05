import { z } from 'zod';
import { EmojiOrderByWithRelationInputObjectSchema } from './objects/EmojiOrderByWithRelationInput.schema';
import { EmojiWhereInputObjectSchema } from './objects/EmojiWhereInput.schema';
import { EmojiWhereUniqueInputObjectSchema } from './objects/EmojiWhereUniqueInput.schema';
import { EmojiCountAggregateInputObjectSchema } from './objects/EmojiCountAggregateInput.schema';
import { EmojiMinAggregateInputObjectSchema } from './objects/EmojiMinAggregateInput.schema';
import { EmojiMaxAggregateInputObjectSchema } from './objects/EmojiMaxAggregateInput.schema';

export const EmojiAggregateSchema = z.object({
  orderBy: z
    .union([
      EmojiOrderByWithRelationInputObjectSchema,
      EmojiOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: EmojiWhereInputObjectSchema.optional(),
  cursor: EmojiWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), EmojiCountAggregateInputObjectSchema])
    .optional(),
  _min: EmojiMinAggregateInputObjectSchema.optional(),
  _max: EmojiMaxAggregateInputObjectSchema.optional(),
});
