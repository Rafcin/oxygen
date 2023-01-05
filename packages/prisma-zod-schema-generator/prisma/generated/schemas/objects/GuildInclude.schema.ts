import { z } from 'zod';
import { RoleFindManySchema } from '../findManyRole.schema';
import { EmojiFindManySchema } from '../findManyEmoji.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { ChannelFindManySchema } from '../findManyChannel.schema';
import { GuildCountOutputTypeArgsObjectSchema } from './GuildCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildInclude> = z
  .object({
    roles: z.union([z.boolean(), z.lazy(() => RoleFindManySchema)]).optional(),
    emojis: z
      .union([z.boolean(), z.lazy(() => EmojiFindManySchema)])
      .optional(),
    users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    channels: z
      .union([z.boolean(), z.lazy(() => ChannelFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => GuildCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const GuildIncludeObjectSchema = Schema;
