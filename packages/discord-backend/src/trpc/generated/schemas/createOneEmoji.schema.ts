import { z } from 'zod';
import { EmojiCreateInputObjectSchema } from './objects/EmojiCreateInput.schema';
import { EmojiUncheckedCreateInputObjectSchema } from './objects/EmojiUncheckedCreateInput.schema';

export const EmojiCreateOneSchema = z.object({
  data: z.union([
    EmojiCreateInputObjectSchema,
    EmojiUncheckedCreateInputObjectSchema,
  ]),
});
