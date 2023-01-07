import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EmojiListRelationFilterObjectSchema } from './EmojiListRelationFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { MessageListRelationFilterObjectSchema } from './MessageListRelationFilter.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ReactionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReactionWhereInputObjectSchema),
        z.lazy(() => ReactionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReactionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReactionWhereInputObjectSchema),
        z.lazy(() => ReactionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    count: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    emojis: z.lazy(() => EmojiListRelationFilterObjectSchema).optional(),
    emojiIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    messages: z.lazy(() => MessageListRelationFilterObjectSchema).optional(),
    messageIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const ReactionWhereInputObjectSchema = Schema;
