import { z } from 'zod';
import { ReactionCreateemojiIdsInputObjectSchema } from './ReactionCreateemojiIdsInput.schema';
import { MessageCreateNestedManyWithoutReactionsInputObjectSchema } from './MessageCreateNestedManyWithoutReactionsInput.schema';
import { ReactionCreatemessageIdsInputObjectSchema } from './ReactionCreatemessageIdsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ReactionCreateWithoutEmojisInput> = z
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
      .lazy(() => MessageCreateNestedManyWithoutReactionsInputObjectSchema)
      .optional(),
    messageIds: z
      .union([
        z.lazy(() => ReactionCreatemessageIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const ReactionCreateWithoutEmojisInputObjectSchema = Schema;
