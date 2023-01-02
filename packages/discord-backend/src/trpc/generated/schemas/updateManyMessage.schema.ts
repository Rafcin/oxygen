import { z } from 'zod';
import { MessageUpdateManyMutationInputObjectSchema } from './objects/MessageUpdateManyMutationInput.schema';
import { MessageWhereInputObjectSchema } from './objects/MessageWhereInput.schema';

export const MessageUpdateManySchema = z.object({
  data: MessageUpdateManyMutationInputObjectSchema,
  where: MessageWhereInputObjectSchema.optional(),
});
