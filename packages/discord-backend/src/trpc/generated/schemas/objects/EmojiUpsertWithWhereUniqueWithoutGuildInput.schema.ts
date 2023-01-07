import { z } from 'zod';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';
import { EmojiUpdateWithoutGuildInputObjectSchema } from './EmojiUpdateWithoutGuildInput.schema';
import { EmojiUncheckedUpdateWithoutGuildInputObjectSchema } from './EmojiUncheckedUpdateWithoutGuildInput.schema';
import { EmojiCreateWithoutGuildInputObjectSchema } from './EmojiCreateWithoutGuildInput.schema';
import { EmojiUncheckedCreateWithoutGuildInputObjectSchema } from './EmojiUncheckedCreateWithoutGuildInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiUpsertWithWhereUniqueWithoutGuildInput> = z
  .object({
    where: z.lazy(() => EmojiWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => EmojiUpdateWithoutGuildInputObjectSchema),
      z.lazy(() => EmojiUncheckedUpdateWithoutGuildInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EmojiCreateWithoutGuildInputObjectSchema),
      z.lazy(() => EmojiUncheckedCreateWithoutGuildInputObjectSchema),
    ]),
  })
  .strict();

export const EmojiUpsertWithWhereUniqueWithoutGuildInputObjectSchema = Schema;
