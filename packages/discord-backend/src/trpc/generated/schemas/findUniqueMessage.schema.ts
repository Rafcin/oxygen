import { z } from 'zod';
import { MessageSelectObjectSchema } from './objects/MessageSelect.schema';
import { MessageIncludeObjectSchema } from './objects/MessageInclude.schema';
import { MessageWhereUniqueInputObjectSchema } from './objects/MessageWhereUniqueInput.schema';

export const MessageFindUniqueSchema = z.object({
  select: MessageSelectObjectSchema.optional(),
  include: MessageIncludeObjectSchema.optional(),
  where: MessageWhereUniqueInputObjectSchema,
});
