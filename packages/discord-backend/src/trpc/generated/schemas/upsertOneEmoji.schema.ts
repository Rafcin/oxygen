import { z } from 'zod';
import { EmojiWhereUniqueInputObjectSchema } from './objects/EmojiWhereUniqueInput.schema';
import { EmojiCreateInputObjectSchema } from './objects/EmojiCreateInput.schema';
import { EmojiUncheckedCreateInputObjectSchema } from './objects/EmojiUncheckedCreateInput.schema';
import { EmojiUpdateInputObjectSchema } from './objects/EmojiUpdateInput.schema';
import { EmojiUncheckedUpdateInputObjectSchema } from './objects/EmojiUncheckedUpdateInput.schema';

export const EmojiUpsertSchema = z.object({
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
