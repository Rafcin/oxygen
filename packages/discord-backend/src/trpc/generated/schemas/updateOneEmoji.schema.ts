import { z } from 'zod';
import { EmojiUpdateInputObjectSchema } from './objects/EmojiUpdateInput.schema';
import { EmojiUncheckedUpdateInputObjectSchema } from './objects/EmojiUncheckedUpdateInput.schema';
import { EmojiWhereUniqueInputObjectSchema } from './objects/EmojiWhereUniqueInput.schema';

export const EmojiUpdateOneSchema = z.object({
  data: z.union([
    EmojiUpdateInputObjectSchema,
    EmojiUncheckedUpdateInputObjectSchema,
  ]),
  where: EmojiWhereUniqueInputObjectSchema,
});
