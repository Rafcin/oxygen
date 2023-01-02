import { z } from 'zod';
import { GuildFindManySchema } from '../findManyGuild.schema';
import { EmojiFindManySchema } from '../findManyEmoji.schema';
import { MessageFindManySchema } from '../findManyMessage.schema';
import { ChannelFindManySchema } from '../findManyChannel.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
    guilds: z
      .union([z.boolean(), z.lazy(() => GuildFindManySchema)])
      .optional(),
    emojis: z
      .union([z.boolean(), z.lazy(() => EmojiFindManySchema)])
      .optional(),
    Messages: z
      .union([z.boolean(), z.lazy(() => MessageFindManySchema)])
      .optional(),
    channels: z
      .union([z.boolean(), z.lazy(() => ChannelFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserIncludeObjectSchema = Schema;
