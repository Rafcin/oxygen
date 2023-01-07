import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './objects/MessageWhereUniqueInput.schema';

export const MessageDeleteOneSchema = z.object({
  where: MessageWhereUniqueInputObjectSchema,
});
