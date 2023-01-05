import { z } from 'zod';
import { MessageSelectObjectSchema } from './objects/MessageSelect.schema';
import { MessageIncludeObjectSchema } from './objects/MessageInclude.schema';
import { MessageCreateInputObjectSchema } from './objects/MessageCreateInput.schema';
import { MessageUncheckedCreateInputObjectSchema } from './objects/MessageUncheckedCreateInput.schema';

export const MessageCreateOneSchema = z.object({
  select: MessageSelectObjectSchema.optional(),
  include: MessageIncludeObjectSchema.optional(),
  data: z.union([
    MessageCreateInputObjectSchema,
    MessageUncheckedCreateInputObjectSchema,
  ]),
});
