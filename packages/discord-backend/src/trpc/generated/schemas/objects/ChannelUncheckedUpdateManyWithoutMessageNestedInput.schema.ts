import { z } from 'zod';
import { ChannelCreateWithoutMessageInputObjectSchema } from './ChannelCreateWithoutMessageInput.schema';
import { ChannelUncheckedCreateWithoutMessageInputObjectSchema } from './ChannelUncheckedCreateWithoutMessageInput.schema';
import { ChannelCreateOrConnectWithoutMessageInputObjectSchema } from './ChannelCreateOrConnectWithoutMessageInput.schema';
import { ChannelUpsertWithWhereUniqueWithoutMessageInputObjectSchema } from './ChannelUpsertWithWhereUniqueWithoutMessageInput.schema';
import { ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithWhereUniqueWithoutMessageInputObjectSchema } from './ChannelUpdateWithWhereUniqueWithoutMessageInput.schema';
import { ChannelUpdateManyWithWhereWithoutMessageInputObjectSchema } from './ChannelUpdateManyWithWhereWithoutMessageInput.schema';
import { ChannelScalarWhereInputObjectSchema } from './ChannelScalarWhereInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ChannelUncheckedUpdateManyWithoutMessageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ChannelCreateWithoutMessageInputObjectSchema),
          z.lazy(() => ChannelCreateWithoutMessageInputObjectSchema).array(),
          z.lazy(() => ChannelUncheckedCreateWithoutMessageInputObjectSchema),
          z
            .lazy(() => ChannelUncheckedCreateWithoutMessageInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ChannelCreateOrConnectWithoutMessageInputObjectSchema),
          z
            .lazy(() => ChannelCreateOrConnectWithoutMessageInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ChannelUpsertWithWhereUniqueWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () => ChannelUpsertWithWhereUniqueWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ChannelWhereUniqueInputObjectSchema),
          z.lazy(() => ChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ChannelWhereUniqueInputObjectSchema),
          z.lazy(() => ChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ChannelWhereUniqueInputObjectSchema),
          z.lazy(() => ChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ChannelWhereUniqueInputObjectSchema),
          z.lazy(() => ChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ChannelUpdateWithWhereUniqueWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () => ChannelUpdateWithWhereUniqueWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ChannelUpdateManyWithWhereWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () => ChannelUpdateManyWithWhereWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ChannelScalarWhereInputObjectSchema),
          z.lazy(() => ChannelScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ChannelUncheckedUpdateManyWithoutMessageNestedInputObjectSchema =
  Schema;
