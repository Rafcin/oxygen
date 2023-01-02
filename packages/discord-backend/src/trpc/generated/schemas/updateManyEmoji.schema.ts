import { z } from 'zod';
import { EmojiUpdateManyMutationInputObjectSchema } from './objects/EmojiUpdateManyMutationInput.schema';
import { EmojiWhereInputObjectSchema } from './objects/EmojiWhereInput.schema';

export const EmojiUpdateManySchema = z.object({
  data: EmojiUpdateManyMutationInputObjectSchema,
  where: EmojiWhereInputObjectSchema.optional(),
});
