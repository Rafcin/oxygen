import { z } from 'zod';
import { GuildArgsObjectSchema } from './GuildArgs.schema';
import { EmojiArgsObjectSchema } from './EmojiArgs.schema';
import { MessageArgsObjectSchema } from './MessageArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleInclude> = z
  .object({
    Guild: z
      .union([z.boolean(), z.lazy(() => GuildArgsObjectSchema)])
      .optional(),
    Emoji: z
      .union([z.boolean(), z.lazy(() => EmojiArgsObjectSchema)])
      .optional(),
    Message: z
      .union([z.boolean(), z.lazy(() => MessageArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const RoleIncludeObjectSchema = Schema;
