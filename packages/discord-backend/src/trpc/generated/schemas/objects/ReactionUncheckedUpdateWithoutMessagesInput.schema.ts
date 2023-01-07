import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { EmojiUncheckedUpdateManyWithoutReactionsNestedInputObjectSchema } from './EmojiUncheckedUpdateManyWithoutReactionsNestedInput.schema';
import { ReactionUpdateemojiIdsInputObjectSchema } from './ReactionUpdateemojiIdsInput.schema';
import { ReactionUpdatemessageIdsInputObjectSchema } from './ReactionUpdatemessageIdsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionUncheckedUpdateWithoutMessagesInput> = z
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
    messageIds: z
      .union([
        z.lazy(() => ReactionUpdatemessageIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const ReactionUncheckedUpdateWithoutMessagesInputObjectSchema = Schema;
