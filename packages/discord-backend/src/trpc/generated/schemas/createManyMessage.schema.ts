import { z } from 'zod';
import { MessageCreateManyInputObjectSchema } from './objects/MessageCreateManyInput.schema';

export const MessageCreateManySchema = z.object({
  data: z.union([
    MessageCreateManyInputObjectSchema,
    z.array(MessageCreateManyInputObjectSchema),
  ]),
});
