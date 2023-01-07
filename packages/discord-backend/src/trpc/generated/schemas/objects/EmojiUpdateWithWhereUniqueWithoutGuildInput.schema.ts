import { z } from 'zod';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';
import { EmojiUpdateWithoutGuildInputObjectSchema } from './EmojiUpdateWithoutGuildInput.schema';
import { EmojiUncheckedUpdateWithoutGuildInputObjectSchema } from './EmojiUncheckedUpdateWithoutGuildInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiUpdateWithWhereUniqueWithoutGuildInput> = z
  .object({
    where: z.lazy(() => EmojiWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => EmojiUpdateWithoutGuildInputObjectSchema),
      z.lazy(() => EmojiUncheckedUpdateWithoutGuildInputObjectSchema),
    ]),
  })
  .strict();

export const EmojiUpdateWithWhereUniqueWithoutGuildInputObjectSchema = Schema;
