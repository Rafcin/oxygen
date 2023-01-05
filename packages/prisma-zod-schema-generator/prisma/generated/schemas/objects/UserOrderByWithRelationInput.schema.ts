import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GuildOrderByRelationAggregateInputObjectSchema } from './GuildOrderByRelationAggregateInput.schema';
import { EmojiOrderByRelationAggregateInputObjectSchema } from './EmojiOrderByRelationAggregateInput.schema';
import { MessageOrderByRelationAggregateInputObjectSchema } from './MessageOrderByRelationAggregateInput.schema';
import { ChannelOrderByRelationAggregateInputObjectSchema } from './ChannelOrderByRelationAggregateInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    username: z.lazy(() => SortOrderSchema).optional(),
    discriminator: z.lazy(() => SortOrderSchema).optional(),
    avatar: z.lazy(() => SortOrderSchema).optional(),
    bot: z.lazy(() => SortOrderSchema).optional(),
    system: z.lazy(() => SortOrderSchema).optional(),
    mfa_enabled: z.lazy(() => SortOrderSchema).optional(),
    banner: z.lazy(() => SortOrderSchema).optional(),
    accent_color: z.lazy(() => SortOrderSchema).optional(),
    locale: z.lazy(() => SortOrderSchema).optional(),
    verified: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    flags: z.lazy(() => SortOrderSchema).optional(),
    premium_class: z.lazy(() => SortOrderSchema).optional(),
    public_flags: z.lazy(() => SortOrderSchema).optional(),
    guilds: z
      .lazy(() => GuildOrderByRelationAggregateInputObjectSchema)
      .optional(),
    guildIds: z.lazy(() => SortOrderSchema).optional(),
    emojis: z
      .lazy(() => EmojiOrderByRelationAggregateInputObjectSchema)
      .optional(),
    emojiIds: z.lazy(() => SortOrderSchema).optional(),
    Messages: z
      .lazy(() => MessageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    messageIds: z.lazy(() => SortOrderSchema).optional(),
    channels: z
      .lazy(() => ChannelOrderByRelationAggregateInputObjectSchema)
      .optional(),
    channelIds: z.lazy(() => SortOrderSchema).optional(),
    accounts: z
      .lazy(() => AccountOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
