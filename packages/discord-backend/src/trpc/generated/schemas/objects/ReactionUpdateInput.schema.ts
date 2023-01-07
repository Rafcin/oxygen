import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { EmojiUpdateManyWithoutReactionsNestedInputObjectSchema } from './EmojiUpdateManyWithoutReactionsNestedInput.schema';
import { ReactionUpdateemojiIdsInputObjectSchema } from './ReactionUpdateemojiIdsInput.schema';
import { MessageUpdateManyWithoutReactionsNestedInputObjectSchema } from './MessageUpdateManyWithoutReactionsNestedInput.schema';
import { ReactionUpdatemessageIdsInputObjectSchema } from './ReactionUpdatemessageIdsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionUpdateInput> = z
  .object({
    count: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    emojis: z
      .lazy(() => EmojiUpdateManyWithoutReactionsNestedInputObjectSchema)
      .optional(),
    emojiIds: z
      .union([
        z.lazy(() => ReactionUpdateemojiIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    messages: z
      .lazy(() => MessageUpdateManyWithoutReactionsNestedInputObjectSchema)
      .optional(),
    messageIds: z
      .union([
        z.lazy(() => ReactionUpdatemessageIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const ReactionUpdateInputObjectSchema = Schema;
