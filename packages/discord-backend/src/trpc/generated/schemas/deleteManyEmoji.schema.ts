import { z } from 'zod';
import { EmojiWhereInputObjectSchema } from './objects/EmojiWhereInput.schema';

export const EmojiDeleteManySchema = z.object({
  where: EmojiWhereInputObjectSchema.optional(),
});
