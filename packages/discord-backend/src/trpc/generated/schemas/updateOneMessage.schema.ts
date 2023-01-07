import { z } from 'zod';
import { MessageUpdateInputObjectSchema } from './objects/MessageUpdateInput.schema';
import { MessageUncheckedUpdateInputObjectSchema } from './objects/MessageUncheckedUpdateInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './objects/MessageWhereUniqueInput.schema';

export const MessageUpdateOneSchema = z.object({
  data: z.union([
    MessageUpdateInputObjectSchema,
    MessageUncheckedUpdateInputObjectSchema,
  ]),
  where: MessageWhereUniqueInputObjectSchema,
});
