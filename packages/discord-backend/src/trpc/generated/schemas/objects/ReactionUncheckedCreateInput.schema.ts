import { z } from 'zod';
import { EmojiUncheckedCreateNestedManyWithoutReactionsInputObjectSchema } from './EmojiUncheckedCreateNestedManyWithoutReactionsInput.schema';
import { ReactionCreateemojiIdsInputObjectSchema } from './ReactionCreateemojiIdsInput.schema';
import { MessageUncheckedCreateNestedManyWithoutReactionsInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutReactionsInput.schema';
import { ReactionCreatemessageIdsInputObjectSchema } from './ReactionCreatemessageIdsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ReactionUncheckedCreateInput> = z
  .object({
    id: z.string(),
    count: z.number(),
    emojis: z
      .lazy(
        () => EmojiUncheckedCreateNestedManyWithoutReactionsInputObjectSchema,
      )
      .optional(),
    emojiIds: z
      .union([
        z.lazy(() => ReactionCreateemojiIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    messages: z
      .lazy(
        () => MessageUncheckedCreateNestedManyWithoutReactionsInputObjectSchema,
      )
      .optional(),
    messageIds: z
      .union([
        z.lazy(() => ReactionCreatemessageIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const ReactionUncheckedCreateInputObjectSchema = Schema;
