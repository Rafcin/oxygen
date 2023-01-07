import { z } from 'zod';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';
import { EmojiUpdateWithoutReactionsInputObjectSchema } from './EmojiUpdateWithoutReactionsInput.schema';
import { EmojiUncheckedUpdateWithoutReactionsInputObjectSchema } from './EmojiUncheckedUpdateWithoutReactionsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiUpdateWithWhereUniqueWithoutReactionsInput> =
  z
    .object({
      where: z.lazy(() => EmojiWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EmojiUpdateWithoutReactionsInputObjectSchema),
        z.lazy(() => EmojiUncheckedUpdateWithoutReactionsInputObjectSchema),
      ]),
    })
    .strict();

export const EmojiUpdateWithWhereUniqueWithoutReactionsInputObjectSchema =
  Schema;
