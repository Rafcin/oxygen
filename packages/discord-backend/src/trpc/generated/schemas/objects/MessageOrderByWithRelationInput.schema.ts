import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleOrderByRelationAggregateInputObjectSchema } from './RoleOrderByRelationAggregateInput.schema';
import { ReactionOrderByRelationAggregateInputObjectSchema } from './ReactionOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { ChannelOrderByRelationAggregateInputObjectSchema } from './ChannelOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    thread: z.lazy(() => SortOrderSchema).optional(),
    channel_id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    timestamp: z.lazy(() => SortOrderSchema).optional(),
    edited_timestamp: z.lazy(() => SortOrderSchema).optional(),
    tts: z.lazy(() => SortOrderSchema).optional(),
    mention_everyone: z.lazy(() => SortOrderSchema).optional(),
    mention_roles: z
      .lazy(() => RoleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    reactions: z
      .lazy(() => ReactionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    reactionIds: z.lazy(() => SortOrderSchema).optional(),
    nonce: z.lazy(() => SortOrderSchema).optional(),
    pinned: z.lazy(() => SortOrderSchema).optional(),
    webhook_id: z.lazy(() => SortOrderSchema).optional(),
    message_type: z.lazy(() => SortOrderSchema).optional(),
    flags: z.lazy(() => SortOrderSchema).optional(),
    application_id: z.lazy(() => SortOrderSchema).optional(),
    position: z.lazy(() => SortOrderSchema).optional(),
    users: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    userIds: z.lazy(() => SortOrderSchema).optional(),
    channels: z
      .lazy(() => ChannelOrderByRelationAggregateInputObjectSchema)
      .optional(),
    channelIds: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MessageOrderByWithRelationInputObjectSchema = Schema;
