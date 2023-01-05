import { z } from 'zod';
import { EmojiWhereUniqueInputObjectSchema } from './objects/EmojiWhereUniqueInput.schema';

export const EmojiFindUniqueSchema = z.object({
  where: EmojiWhereUniqueInputObjectSchema,
});
