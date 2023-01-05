import { z } from 'zod';
import { RoleFindManySchema } from '../findManyRole.schema';
import { ReactionFindManySchema } from '../findManyReaction.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { ChannelFindManySchema } from '../findManyChannel.schema';
import { MessageCountOutputTypeArgsObjectSchema } from './MessageCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageInclude> = z
  .object({
    mention_roles: z
      .union([z.boolean(), z.lazy(() => RoleFindManySchema)])
      .optional(),
    reactions: z
      .union([z.boolean(), z.lazy(() => ReactionFindManySchema)])
      .optional(),
    users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    channels: z
      .union([z.boolean(), z.lazy(() => ChannelFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => MessageCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const MessageIncludeObjectSchema = Schema;
