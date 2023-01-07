import { z } from 'zod';
import { ChannelCreateWithoutGuildsInputObjectSchema } from './ChannelCreateWithoutGuildsInput.schema';
import { ChannelUncheckedCreateWithoutGuildsInputObjectSchema } from './ChannelUncheckedCreateWithoutGuildsInput.schema';
import { ChannelCreateOrConnectWithoutGuildsInputObjectSchema } from './ChannelCreateOrConnectWithoutGuildsInput.schema';
import { ChannelUpsertWithWhereUniqueWithoutGuildsInputObjectSchema } from './ChannelUpsertWithWhereUniqueWithoutGuildsInput.schema';
import { ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithWhereUniqueWithoutGuildsInputObjectSchema } from './ChannelUpdateWithWhereUniqueWithoutGuildsInput.schema';
import { ChannelUpdateManyWithWhereWithoutGuildsInputObjectSchema } from './ChannelUpdateManyWithWhereWithoutGuildsInput.schema';
import { ChannelScalarWhereInputObjectSchema } from './ChannelScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelUncheckedUpdateManyWithoutGuildsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ChannelCreateWithoutGuildsInputObjectSchema),
          z.lazy(() => ChannelCreateWithoutGuildsInputObjectSchema).array(),
          z.lazy(() => ChannelUncheckedCreateWithoutGuildsInputObjectSchema),
          z
            .lazy(() => ChannelUncheckedCreateWithoutGuildsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ChannelCreateOrConnectWithoutGuildsInputObjectSchema),
          z
            .lazy(() => ChannelCreateOrConnectWithoutGuildsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ChannelUpsertWithWhereUniqueWithoutGuildsInputObjectSchema,
          ),
          z
            .lazy(
              () => ChannelUpsertWithWhereUniqueWithoutGuildsInputObjectSchema,
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
            () => ChannelUpdateWithWhereUniqueWithoutGuildsInputObjectSchema,
          ),
          z
            .lazy(
              () => ChannelUpdateWithWhereUniqueWithoutGuildsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ChannelUpdateManyWithWhereWithoutGuildsInputObjectSchema,
          ),
          z
            .lazy(
              () => ChannelUpdateManyWithWhereWithoutGuildsInputObjectSchema,
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

export const ChannelUncheckedUpdateManyWithoutGuildsNestedInputObjectSchema =
  Schema;
