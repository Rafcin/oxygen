import { z } from 'zod';
import { MessageOrderByWithRelationInputObjectSchema } from './objects/MessageOrderByWithRelationInput.schema';
import { MessageWhereInputObjectSchema } from './objects/MessageWhereInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './objects/MessageWhereUniqueInput.schema';
import { MessageCountAggregateInputObjectSchema } from './objects/MessageCountAggregateInput.schema';
import { MessageMinAggregateInputObjectSchema } from './objects/MessageMinAggregateInput.schema';
import { MessageMaxAggregateInputObjectSchema } from './objects/MessageMaxAggregateInput.schema';
import { MessageAvgAggregateInputObjectSchema } from './objects/MessageAvgAggregateInput.schema';
import { MessageSumAggregateInputObjectSchema } from './objects/MessageSumAggregateInput.schema';

export const MessageAggregateSchema = z.object({
  orderBy: z
    .union([
      MessageOrderByWithRelationInputObjectSchema,
      MessageOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MessageWhereInputObjectSchema.optional(),
  cursor: MessageWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MessageCountAggregateInputObjectSchema])
    .optional(),
  _min: MessageMinAggregateInputObjectSchema.optional(),
  _max: MessageMaxAggregateInputObjectSchema.optional(),
  _avg: MessageAvgAggregateInputObjectSchema.optional(),
  _sum: MessageSumAggregateInputObjectSchema.optional(),
});
