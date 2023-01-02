import { z } from 'zod';
import { EmojiSelectObjectSchema } from './objects/EmojiSelect.schema';
import { EmojiIncludeObjectSchema } from './objects/EmojiInclude.schema';
import { EmojiWhereUniqueInputObjectSchema } from './objects/EmojiWhereUniqueInput.schema';

export const EmojiDeleteOneSchema = z.object({
  select: EmojiSelectObjectSchema.optional(),
  include: EmojiIncludeObjectSchema.optional(),
  where: EmojiWhereUniqueInputObjectSchema,
});
