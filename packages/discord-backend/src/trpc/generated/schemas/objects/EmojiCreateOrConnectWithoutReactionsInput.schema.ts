import { z } from 'zod';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';
import { EmojiCreateWithoutReactionsInputObjectSchema } from './EmojiCreateWithoutReactionsInput.schema';
import { EmojiUncheckedCreateWithoutReactionsInputObjectSchema } from './EmojiUncheckedCreateWithoutReactionsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiCreateOrConnectWithoutReactionsInput> = z
  .object({
    where: z.lazy(() => EmojiWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EmojiCreateWithoutReactionsInputObjectSchema),
      z.lazy(() => EmojiUncheckedCreateWithoutReactionsInputObjectSchema),
    ]),
  })
  .strict();

export const EmojiCreateOrConnectWithoutReactionsInputObjectSchema = Schema;
