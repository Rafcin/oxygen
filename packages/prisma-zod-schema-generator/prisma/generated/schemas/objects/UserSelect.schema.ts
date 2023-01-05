import { z } from 'zod';
import { GuildFindManySchema } from '../findManyGuild.schema';
import { EmojiFindManySchema } from '../findManyEmoji.schema';
import { MessageFindManySchema } from '../findManyMessage.schema';
import { ChannelFindManySchema } from '../findManyChannel.schema';
import { AccountFindManySchema } from '../findManyAccount.schema';
import { SessionFindManySchema } from '../findManySession.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    username: z.boolean().optional(),
    discriminator: z.boolean().optional(),
    avatar: z.boolean().optional(),
    bot: z.boolean().optional(),
    system: z.boolean().optional(),
    mfa_enabled: z.boolean().optional(),
    banner: z.boolean().optional(),
    accent_color: z.boolean().optional(),
    locale: z.boolean().optional(),
    verified: z.boolean().optional(),
    email: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    flags: z.boolean().optional(),
    premium_class: z.boolean().optional(),
    public_flags: z.boolean().optional(),
    guilds: z
      .union([z.boolean(), z.lazy(() => GuildFindManySchema)])
      .optional(),
    guildIds: z.boolean().optional(),
    emojis: z
      .union([z.boolean(), z.lazy(() => EmojiFindManySchema)])
      .optional(),
    emojiIds: z.boolean().optional(),
    Messages: z
      .union([z.boolean(), z.lazy(() => MessageFindManySchema)])
      .optional(),
    messageIds: z.boolean().optional(),
    channels: z
      .union([z.boolean(), z.lazy(() => ChannelFindManySchema)])
      .optional(),
    channelIds: z.boolean().optional(),
    accounts: z
      .union([z.boolean(), z.lazy(() => AccountFindManySchema)])
      .optional(),
    sessions: z
      .union([z.boolean(), z.lazy(() => SessionFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserSelectObjectSchema = Schema;
