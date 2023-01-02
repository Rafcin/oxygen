import { z } from 'zod';
import { EmojiCreateManyInputObjectSchema } from './objects/EmojiCreateManyInput.schema';

export const EmojiCreateManySchema = z.object({
  data: z.union([
    EmojiCreateManyInputObjectSchema,
    z.array(EmojiCreateManyInputObjectSchema),
  ]),
});
