import { z } from 'zod';
import { RoleFindManySchema } from '../findManyRole.schema';
import { ReactionFindManySchema } from '../findManyReaction.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { ChannelFindManySchema } from '../findManyChannel.schema';
import { MessageCountOutputTypeArgsObjectSchema } from './MessageCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageSelect> = z
  .object({
    id: z.boolean().optional(),
    thread: z.boolean().optional(),
    channel_id: z.boolean().optional(),
    content: z.boolean().optional(),
    timestamp: z.boolean().optional(),
    edited_timestamp: z.boolean().optional(),
    tts: z.boolean().optional(),
    mention_everyone: z.boolean().optional(),
    mention_roles: z
      .union([z.boolean(), z.lazy(() => RoleFindManySchema)])
      .optional(),
    reactions: z
      .union([z.boolean(), z.lazy(() => ReactionFindManySchema)])
      .optional(),
    reactionIds: z.boolean().optional(),
    nonce: z.boolean().optional(),
    pinned: z.boolean().optional(),
    webhook_id: z.boolean().optional(),
    message_discord_type: z.boolean().optional(),
    flags: z.boolean().optional(),
    application_id: z.boolean().optional(),
    position: z.boolean().optional(),
    users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    userIds: z.boolean().optional(),
    channels: z
      .union([z.boolean(), z.lazy(() => ChannelFindManySchema)])
      .optional(),
    channelIds: z.boolean().optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => MessageCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const MessageSelectObjectSchema = Schema;
