import { z } from 'zod';
import { EmojiWhereUniqueInputObjectSchema } from './objects/EmojiWhereUniqueInput.schema';

export const EmojiDeleteOneSchema = z.object({
  where: EmojiWhereUniqueInputObjectSchema,
});
