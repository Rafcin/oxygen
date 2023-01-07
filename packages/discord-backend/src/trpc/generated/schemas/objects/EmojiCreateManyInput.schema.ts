import { z } from 'zod';
import { EmojiCreateuserIdsInputObjectSchema } from './EmojiCreateuserIdsInput.schema';
import { EmojiCreatereactionIdsInputObjectSchema } from './EmojiCreatereactionIdsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiCreateManyInput> = z
  .object({
    id: z.string(),
    name: z.string(),
    userIds: z
      .union([
        z.lazy(() => EmojiCreateuserIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    require_colons: z.boolean().optional().nullable(),
    managed: z.boolean().optional().nullable(),
    animated: z.boolean().optional().nullable(),
    available: z.boolean().optional().nullable(),
    guildId: z.string(),
    reactionIds: z
      .union([
        z.lazy(() => EmojiCreatereactionIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const EmojiCreateManyInputObjectSchema = Schema;
