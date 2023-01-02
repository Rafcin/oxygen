import { z } from 'zod';
import { EmojiCreateWithoutReactionsInputObjectSchema } from './EmojiCreateWithoutReactionsInput.schema';
import { EmojiUncheckedCreateWithoutReactionsInputObjectSchema } from './EmojiUncheckedCreateWithoutReactionsInput.schema';
import { EmojiCreateOrConnectWithoutReactionsInputObjectSchema } from './EmojiCreateOrConnectWithoutReactionsInput.schema';
import { EmojiUpsertWithWhereUniqueWithoutReactionsInputObjectSchema } from './EmojiUpsertWithWhereUniqueWithoutReactionsInput.schema';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';
import { EmojiUpdateWithWhereUniqueWithoutReactionsInputObjectSchema } from './EmojiUpdateWithWhereUniqueWithoutReactionsInput.schema';
import { EmojiUpdateManyWithWhereWithoutReactionsInputObjectSchema } from './EmojiUpdateManyWithWhereWithoutReactionsInput.schema';
import { EmojiScalarWhereInputObjectSchema } from './EmojiScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiUpdateManyWithoutReactionsNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => EmojiUpsertWithWhereUniqueWithoutReactionsInputObjectSchema,
        ),
        z
          .lazy(
            () => EmojiUpsertWithWhereUniqueWithoutReactionsInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => EmojiWhereUniqueInputObjectSchema),
        z.lazy(() => EmojiWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => EmojiWhereUniqueInputObjectSchema),
        z.lazy(() => EmojiWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => EmojiWhereUniqueInputObjectSchema),
        z.lazy(() => EmojiWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => EmojiWhereUniqueInputObjectSchema),
        z.lazy(() => EmojiWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => EmojiUpdateWithWhereUniqueWithoutReactionsInputObjectSchema,
        ),
        z
          .lazy(
            () => EmojiUpdateWithWhereUniqueWithoutReactionsInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => EmojiUpdateManyWithWhereWithoutReactionsInputObjectSchema),
        z
          .lazy(() => EmojiUpdateManyWithWhereWithoutReactionsInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => EmojiScalarWhereInputObjectSchema),
        z.lazy(() => EmojiScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const EmojiUpdateManyWithoutReactionsNestedInputObjectSchema = Schema;
