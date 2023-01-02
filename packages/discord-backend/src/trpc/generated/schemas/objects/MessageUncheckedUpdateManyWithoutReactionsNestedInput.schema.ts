import { z } from 'zod';
import { MessageCreateWithoutReactionsInputObjectSchema } from './MessageCreateWithoutReactionsInput.schema';
import { MessageUncheckedCreateWithoutReactionsInputObjectSchema } from './MessageUncheckedCreateWithoutReactionsInput.schema';
import { MessageCreateOrConnectWithoutReactionsInputObjectSchema } from './MessageCreateOrConnectWithoutReactionsInput.schema';
import { MessageUpsertWithWhereUniqueWithoutReactionsInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutReactionsInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithWhereUniqueWithoutReactionsInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutReactionsInput.schema';
import { MessageUpdateManyWithWhereWithoutReactionsInputObjectSchema } from './MessageUpdateManyWithWhereWithoutReactionsInput.schema';
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutReactionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MessageCreateWithoutReactionsInputObjectSchema),
          z.lazy(() => MessageCreateWithoutReactionsInputObjectSchema).array(),
          z.lazy(() => MessageUncheckedCreateWithoutReactionsInputObjectSchema),
          z
            .lazy(() => MessageUncheckedCreateWithoutReactionsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MessageCreateOrConnectWithoutReactionsInputObjectSchema),
          z
            .lazy(() => MessageCreateOrConnectWithoutReactionsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => MessageUpsertWithWhereUniqueWithoutReactionsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUpsertWithWhereUniqueWithoutReactionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => MessageUpdateWithWhereUniqueWithoutReactionsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUpdateWithWhereUniqueWithoutReactionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MessageUpdateManyWithWhereWithoutReactionsInputObjectSchema,
          ),
          z
            .lazy(
              () => MessageUpdateManyWithWhereWithoutReactionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MessageScalarWhereInputObjectSchema),
          z.lazy(() => MessageScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MessageUncheckedUpdateManyWithoutReactionsNestedInputObjectSchema =
  Schema;
