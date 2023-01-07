import { z } from 'zod';
import { ReactionCreateemojiIdsInputObjectSchema } from './ReactionCreateemojiIdsInput.schema';
import { MessageUncheckedCreateNestedManyWithoutReactionsInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutReactionsInput.schema';
import { ReactionCreatemessageIdsInputObjectSchema } from './ReactionCreatemessageIdsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionUncheckedCreateWithoutEmojisInput> = z
  .object({
    id: z.string(),
    count: z.number(),
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

export const ReactionUncheckedCreateWithoutEmojisInputObjectSchema = Schema;
