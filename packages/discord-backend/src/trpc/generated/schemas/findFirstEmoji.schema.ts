import { z } from 'zod';
import { EmojiOrderByWithRelationInputObjectSchema } from './objects/EmojiOrderByWithRelationInput.schema';
import { EmojiWhereInputObjectSchema } from './objects/EmojiWhereInput.schema';
import { EmojiWhereUniqueInputObjectSchema } from './objects/EmojiWhereUniqueInput.schema';
import { EmojiScalarFieldEnumSchema } from './enums/EmojiScalarFieldEnum.schema';

export const EmojiFindFirstSchema = z.object({
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
  distinct: z.array(EmojiScalarFieldEnumSchema).optional(),
});
