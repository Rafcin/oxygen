import { z } from 'zod';
import { MessageWhereInputObjectSchema } from './objects/MessageWhereInput.schema';

export const MessageDeleteManySchema = z.object({
  where: MessageWhereInputObjectSchema.optional(),
});
