import { z } from 'zod';
import { MessageWhereInputObjectSchema } from './objects/MessageWhereInput.schema';
import { MessageOrderByWithAggregationInputObjectSchema } from './objects/MessageOrderByWithAggregationInput.schema';
import { MessageScalarWhereWithAggregatesInputObjectSchema } from './objects/MessageScalarWhereWithAggregatesInput.schema';
import { MessageScalarFieldEnumSchema } from './enums/MessageScalarFieldEnum.schema';

export const MessageGroupBySchema = z.object({
  where: MessageWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MessageOrderByWithAggregationInputObjectSchema,
      MessageOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: MessageScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MessageScalarFieldEnumSchema),
});
