import { z } from 'zod';
import { RoleFindManySchema } from '../findManyRole.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { GuildArgsObjectSchema } from './GuildArgs.schema';
import { ReactionFindManySchema } from '../findManyReaction.schema';
import { EmojiCountOutputTypeArgsObjectSchema } from './EmojiCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    roles: z.union([z.boolean(), z.lazy(() => RoleFindManySchema)]).optional(),
    users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    userIds: z.boolean().optional(),
    require_colons: z.boolean().optional(),
    managed: z.boolean().optional(),
    animated: z.boolean().optional(),
    available: z.boolean().optional(),
    Guild: z
      .union([z.boolean(), z.lazy(() => GuildArgsObjectSchema)])
      .optional(),
    guildId: z.boolean().optional(),
    reactions: z
      .union([z.boolean(), z.lazy(() => ReactionFindManySchema)])
      .optional(),
    reactionIds: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => EmojiCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const EmojiSelectObjectSchema = Schema;
