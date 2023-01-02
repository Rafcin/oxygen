import { z } from 'zod';
import { MessageSelectObjectSchema } from './objects/MessageSelect.schema';
import { MessageIncludeObjectSchema } from './objects/MessageInclude.schema';
import { MessageUpdateInputObjectSchema } from './objects/MessageUpdateInput.schema';
import { MessageUncheckedUpdateInputObjectSchema } from './objects/MessageUncheckedUpdateInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './objects/MessageWhereUniqueInput.schema';

export const MessageUpdateOneSchema = z.object({
  select: MessageSelectObjectSchema.optional(),
  include: MessageIncludeObjectSchema.optional(),
  data: z.union([
    MessageUpdateInputObjectSchema,
    MessageUncheckedUpdateInputObjectSchema,
  ]),
  where: MessageWhereUniqueInputObjectSchema,
});
