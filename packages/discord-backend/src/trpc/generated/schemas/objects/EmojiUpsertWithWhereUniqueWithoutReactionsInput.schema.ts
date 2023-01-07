import { z } from 'zod';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';
import { EmojiUpdateWithoutReactionsInputObjectSchema } from './EmojiUpdateWithoutReactionsInput.schema';
import { EmojiUncheckedUpdateWithoutReactionsInputObjectSchema } from './EmojiUncheckedUpdateWithoutReactionsInput.schema';
import { EmojiCreateWithoutReactionsInputObjectSchema } from './EmojiCreateWithoutReactionsInput.schema';
import { EmojiUncheckedCreateWithoutReactionsInputObjectSchema } from './EmojiUncheckedCreateWithoutReactionsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiUpsertWithWhereUniqueWithoutReactionsInput> =
  z
    .object({
      where: z.lazy(() => EmojiWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EmojiUpdateWithoutReactionsInputObjectSchema),
        z.lazy(() => EmojiUncheckedUpdateWithoutReactionsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => EmojiCreateWithoutReactionsInputObjectSchema),
        z.lazy(() => EmojiUncheckedCreateWithoutReactionsInputObjectSchema),
      ]),
    })
    .strict();

export const EmojiUpsertWithWhereUniqueWithoutReactionsInputObjectSchema =
  Schema;
