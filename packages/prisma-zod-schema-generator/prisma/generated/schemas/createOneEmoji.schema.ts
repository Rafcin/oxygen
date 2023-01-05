import { z } from 'zod';
import { EmojiSelectObjectSchema } from './objects/EmojiSelect.schema';
import { EmojiIncludeObjectSchema } from './objects/EmojiInclude.schema';
import { EmojiCreateInputObjectSchema } from './objects/EmojiCreateInput.schema';
import { EmojiUncheckedCreateInputObjectSchema } from './objects/EmojiUncheckedCreateInput.schema';

export const EmojiCreateOneSchema = z.object({
  select: EmojiSelectObjectSchema.optional(),
  include: EmojiIncludeObjectSchema.optional(),
  data: z.union([
    EmojiCreateInputObjectSchema,
    EmojiUncheckedCreateInputObjectSchema,
  ]),
});
