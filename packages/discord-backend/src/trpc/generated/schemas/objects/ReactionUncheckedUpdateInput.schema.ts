import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { EmojiUncheckedUpdateManyWithoutReactionsNestedInputObjectSchema } from './EmojiUncheckedUpdateManyWithoutReactionsNestedInput.schema';
import { ReactionUpdateemojiIdsInputObjectSchema } from './ReactionUpdateemojiIdsInput.schema';
import { MessageUncheckedUpdateManyWithoutReactionsNestedInputObjectSchema } from './MessageUncheckedUpdateManyWithoutReactionsNestedInput.schema';
import { ReactionUpdatemessageIdsInputObjectSchema } from './ReactionUpdatemessageIdsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ReactionUncheckedUpdateInput> = z
  .object({
    count: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    emojis: z
      .lazy(
        () => EmojiUncheckedUpdateManyWithoutReactionsNestedInputObjectSchema,
      )
      .optional(),
    emojiIds: z
      .union([
        z.lazy(() => ReactionUpdateemojiIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    messages: z
      .lazy(
        () => MessageUncheckedUpdateManyWithoutReactionsNestedInputObjectSchema,
      )
      .optional(),
    messageIds: z
      .union([
        z.lazy(() => ReactionUpdatemessageIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const ReactionUncheckedUpdateInputObjectSchema = Schema;
