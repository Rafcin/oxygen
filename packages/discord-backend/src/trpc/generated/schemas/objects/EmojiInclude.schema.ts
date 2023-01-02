import { z } from 'zod';
import { RoleFindManySchema } from '../findManyRole.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { GuildArgsObjectSchema } from './GuildArgs.schema';
import { ReactionFindManySchema } from '../findManyReaction.schema';
import { EmojiCountOutputTypeArgsObjectSchema } from './EmojiCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiInclude> = z
  .object({
    roles: z.union([z.boolean(), z.lazy(() => RoleFindManySchema)]).optional(),
    users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    Guild: z
      .union([z.boolean(), z.lazy(() => GuildArgsObjectSchema)])
      .optional(),
    reactions: z
      .union([z.boolean(), z.lazy(() => ReactionFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => EmojiCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const EmojiIncludeObjectSchema = Schema;
