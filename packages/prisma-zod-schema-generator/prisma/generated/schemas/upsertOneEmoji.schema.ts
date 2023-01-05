import { z } from 'zod';
import { EmojiSelectObjectSchema } from './objects/EmojiSelect.schema';
import { EmojiIncludeObjectSchema } from './objects/EmojiInclude.schema';
import { EmojiWhereUniqueInputObjectSchema } from './objects/EmojiWhereUniqueInput.schema';
import { EmojiCreateInputObjectSchema } from './objects/EmojiCreateInput.schema';
import { EmojiUncheckedCreateInputObjectSchema } from './objects/EmojiUncheckedCreateInput.schema';
import { EmojiUpdateInputObjectSchema } from './objects/EmojiUpdateInput.schema';
import { EmojiUncheckedUpdateInputObjectSchema } from './objects/EmojiUncheckedUpdateInput.schema';

export const EmojiUpsertSchema = z.object({
  select: EmojiSelectObjectSchema.optional(),
  include: EmojiIncludeObjectSchema.optional(),
  where: EmojiWhereUniqueInputObjectSchema,
  create: z.union([
    EmojiCreateInputObjectSchema,
    EmojiUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    EmojiUpdateInputObjectSchema,
    EmojiUncheckedUpdateInputObjectSchema,
  ]),
});
