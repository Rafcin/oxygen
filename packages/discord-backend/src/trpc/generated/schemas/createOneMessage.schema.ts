import { z } from 'zod';
import { MessageCreateInputObjectSchema } from './objects/MessageCreateInput.schema';
import { MessageUncheckedCreateInputObjectSchema } from './objects/MessageUncheckedCreateInput.schema';

export const MessageCreateOneSchema = z.object({
  data: z.union([
    MessageCreateInputObjectSchema,
    MessageUncheckedCreateInputObjectSchema,
  ]),
});
