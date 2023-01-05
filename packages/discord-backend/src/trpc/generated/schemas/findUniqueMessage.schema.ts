import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './objects/MessageWhereUniqueInput.schema';

export const MessageFindUniqueSchema = z.object({
  where: MessageWhereUniqueInputObjectSchema,
});
