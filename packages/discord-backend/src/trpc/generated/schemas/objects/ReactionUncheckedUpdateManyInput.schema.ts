import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ReactionUpdateemojiIdsInputObjectSchema } from './ReactionUpdateemojiIdsInput.schema';
import { ReactionUpdatemessageIdsInputObjectSchema } from './ReactionUpdatemessageIdsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionUncheckedUpdateManyInput> = z
  .object({
    count: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
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

export const ReactionUncheckedUpdateManyInputObjectSchema = Schema;
