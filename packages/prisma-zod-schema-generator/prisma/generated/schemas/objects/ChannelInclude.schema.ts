import { z } from 'zod';
import { GuildFindManySchema } from '../findManyGuild.schema';
import { MessageFindManySchema } from '../findManyMessage.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { ChannelCountOutputTypeArgsObjectSchema } from './ChannelCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelInclude> = z
  .object({
    guilds: z
      .union([z.boolean(), z.lazy(() => GuildFindManySchema)])
      .optional(),
    Message: z
      .union([z.boolean(), z.lazy(() => MessageFindManySchema)])
      .optional(),
    users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ChannelCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ChannelIncludeObjectSchema = Schema;
