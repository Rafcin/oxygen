import { z } from 'zod';
import { EmojiSelectObjectSchema } from './objects/EmojiSelect.schema';
import { EmojiIncludeObjectSchema } from './objects/EmojiInclude.schema';
import { EmojiUpdateInputObjectSchema } from './objects/EmojiUpdateInput.schema';
import { EmojiUncheckedUpdateInputObjectSchema } from './objects/EmojiUncheckedUpdateInput.schema';
import { EmojiWhereUniqueInputObjectSchema } from './objects/EmojiWhereUniqueInput.schema';

export const EmojiUpdateOneSchema = z.object({
  select: EmojiSelectObjectSchema.optional(),
  include: EmojiIncludeObjectSchema.optional(),
  data: z.union([
    EmojiUpdateInputObjectSchema,
    EmojiUncheckedUpdateInputObjectSchema,
  ]),
  where: EmojiWhereUniqueInputObjectSchema,
});
