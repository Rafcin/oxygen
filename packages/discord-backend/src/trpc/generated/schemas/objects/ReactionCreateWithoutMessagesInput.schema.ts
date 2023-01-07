import { z } from 'zod';
import { EmojiCreateNestedManyWithoutReactionsInputObjectSchema } from './EmojiCreateNestedManyWithoutReactionsInput.schema';
import { ReactionCreateemojiIdsInputObjectSchema } from './ReactionCreateemojiIdsInput.schema';
import { ReactionCreatemessageIdsInputObjectSchema } from './ReactionCreatemessageIdsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ReactionCreateWithoutMessagesInput> = z
  .object({
    id: z.string(),
    count: z.number(),
    emojis: z
      .lazy(() => EmojiCreateNestedManyWithoutReactionsInputObjectSchema)
      .optional(),
    emojiIds: z
      .union([
        z.lazy(() => ReactionCreateemojiIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    messageIds: z
      .union([
        z.lazy(() => ReactionCreatemessageIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const ReactionCreateWithoutMessagesInputObjectSchema = Schema;
