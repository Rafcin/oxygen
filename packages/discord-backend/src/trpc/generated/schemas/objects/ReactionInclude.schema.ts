import { z } from 'zod';
import { EmojiFindManySchema } from '../findManyEmoji.schema';
import { MessageFindManySchema } from '../findManyMessage.schema';
import { ReactionCountOutputTypeArgsObjectSchema } from './ReactionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionInclude> = z
  .object({
    emojis: z
      .union([z.boolean(), z.lazy(() => EmojiFindManySchema)])
      .optional(),
    messages: z
      .union([z.boolean(), z.lazy(() => MessageFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ReactionCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ReactionIncludeObjectSchema = Schema;
