import { z } from 'zod';
import { EmojiCreateWithoutReactionsInputObjectSchema } from './EmojiCreateWithoutReactionsInput.schema';
import { EmojiUncheckedCreateWithoutReactionsInputObjectSchema } from './EmojiUncheckedCreateWithoutReactionsInput.schema';
import { EmojiCreateOrConnectWithoutReactionsInputObjectSchema } from './EmojiCreateOrConnectWithoutReactionsInput.schema';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiCreateNestedManyWithoutReactionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EmojiCreateWithoutReactionsInputObjectSchema),
        z.lazy(() => EmojiCreateWithoutReactionsInputObjectSchema).array(),
        z.lazy(() => EmojiUncheckedCreateWithoutReactionsInputObjectSchema),
        z
          .lazy(() => EmojiUncheckedCreateWithoutReactionsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => EmojiCreateOrConnectWithoutReactionsInputObjectSchema),
        z
          .lazy(() => EmojiCreateOrConnectWithoutReactionsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => EmojiWhereUniqueInputObjectSchema),
        z.lazy(() => EmojiWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const EmojiCreateNestedManyWithoutReactionsInputObjectSchema = Schema;
