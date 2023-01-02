import { z } from 'zod';
import { EmojiFindManySchema } from '../findManyEmoji.schema';
import { MessageFindManySchema } from '../findManyMessage.schema';
import { ReactionCountOutputTypeArgsObjectSchema } from './ReactionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionSelect> = z
  .object({
    id: z.boolean().optional(),
    count: z.boolean().optional(),
    emojis: z
      .union([z.boolean(), z.lazy(() => EmojiFindManySchema)])
      .optional(),
    emojiIds: z.boolean().optional(),
    messages: z
      .union([z.boolean(), z.lazy(() => MessageFindManySchema)])
      .optional(),
    messageIds: z.boolean().optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ReactionCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ReactionSelectObjectSchema = Schema;
