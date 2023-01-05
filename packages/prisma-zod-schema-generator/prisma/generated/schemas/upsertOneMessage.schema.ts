import { z } from 'zod';
import { MessageSelectObjectSchema } from './objects/MessageSelect.schema';
import { MessageIncludeObjectSchema } from './objects/MessageInclude.schema';
import { MessageWhereUniqueInputObjectSchema } from './objects/MessageWhereUniqueInput.schema';
import { MessageCreateInputObjectSchema } from './objects/MessageCreateInput.schema';
import { MessageUncheckedCreateInputObjectSchema } from './objects/MessageUncheckedCreateInput.schema';
import { MessageUpdateInputObjectSchema } from './objects/MessageUpdateInput.schema';
import { MessageUncheckedUpdateInputObjectSchema } from './objects/MessageUncheckedUpdateInput.schema';

export const MessageUpsertSchema = z.object({
  select: MessageSelectObjectSchema.optional(),
  include: MessageIncludeObjectSchema.optional(),
  where: MessageWhereUniqueInputObjectSchema,
  create: z.union([
    MessageCreateInputObjectSchema,
    MessageUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MessageUpdateInputObjectSchema,
    MessageUncheckedUpdateInputObjectSchema,
  ]),
});
