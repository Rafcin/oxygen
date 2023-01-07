import { z } from 'zod';
import { MessageCreateWithoutChannelsInputObjectSchema } from './MessageCreateWithoutChannelsInput.schema';
import { MessageUncheckedCreateWithoutChannelsInputObjectSchema } from './MessageUncheckedCreateWithoutChannelsInput.schema';
import { MessageCreateOrConnectWithoutChannelsInputObjectSchema } from './MessageCreateOrConnectWithoutChannelsInput.schema';
import { MessageUpsertWithWhereUniqueWithoutChannelsInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutChannelsInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithWhereUniqueWithoutChannelsInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutChannelsInput.schema';
import { MessageUpdateManyWithWhereWithoutChannelsInputObjectSchema } from './MessageUpdateManyWithWhereWithoutChannelsInput.schema';
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutChannelsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MessageCreateWithoutChannelsInputObjectSchema),
          z.lazy(() => MessageCreateWithoutChannelsInputObjectSchema).array(),
          z.lazy(() => MessageUncheckedCreateWithoutChannelsInputObjectSchema),
          z
            .lazy(() => MessageUncheckedCreateWithoutChannelsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MessageCreateOrConnectWithoutChannelsInputObjectSchema),
          z
            .lazy(() => MessageCreateOrConnectWithoutChannelsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => MessageUpsertWithWhereUniqueWithoutChannelsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUpsertWithWhereUniqueWithoutChannelsInputObjectSchema,
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
            () => MessageUpdateWithWhereUniqueWithoutChannelsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUpdateWithWhereUniqueWithoutChannelsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MessageUpdateManyWithWhereWithoutChannelsInputObjectSchema,
          ),
          z
            .lazy(
              () => MessageUpdateManyWithWhereWithoutChannelsInputObjectSchema,
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

export const MessageUncheckedUpdateManyWithoutChannelsNestedInputObjectSchema =
  Schema;
