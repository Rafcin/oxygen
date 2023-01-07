import { z } from 'zod';
import { GuildCreateWithoutChannelsInputObjectSchema } from './GuildCreateWithoutChannelsInput.schema';
import { GuildUncheckedCreateWithoutChannelsInputObjectSchema } from './GuildUncheckedCreateWithoutChannelsInput.schema';
import { GuildCreateOrConnectWithoutChannelsInputObjectSchema } from './GuildCreateOrConnectWithoutChannelsInput.schema';
import { GuildUpsertWithWhereUniqueWithoutChannelsInputObjectSchema } from './GuildUpsertWithWhereUniqueWithoutChannelsInput.schema';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';
import { GuildUpdateWithWhereUniqueWithoutChannelsInputObjectSchema } from './GuildUpdateWithWhereUniqueWithoutChannelsInput.schema';
import { GuildUpdateManyWithWhereWithoutChannelsInputObjectSchema } from './GuildUpdateManyWithWhereWithoutChannelsInput.schema';
import { GuildScalarWhereInputObjectSchema } from './GuildScalarWhereInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.GuildUncheckedUpdateManyWithoutChannelsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GuildCreateWithoutChannelsInputObjectSchema),
          z.lazy(() => GuildCreateWithoutChannelsInputObjectSchema).array(),
          z.lazy(() => GuildUncheckedCreateWithoutChannelsInputObjectSchema),
          z
            .lazy(() => GuildUncheckedCreateWithoutChannelsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => GuildCreateOrConnectWithoutChannelsInputObjectSchema),
          z
            .lazy(() => GuildCreateOrConnectWithoutChannelsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => GuildUpsertWithWhereUniqueWithoutChannelsInputObjectSchema,
          ),
          z
            .lazy(
              () => GuildUpsertWithWhereUniqueWithoutChannelsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => GuildWhereUniqueInputObjectSchema),
          z.lazy(() => GuildWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => GuildWhereUniqueInputObjectSchema),
          z.lazy(() => GuildWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => GuildWhereUniqueInputObjectSchema),
          z.lazy(() => GuildWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => GuildWhereUniqueInputObjectSchema),
          z.lazy(() => GuildWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => GuildUpdateWithWhereUniqueWithoutChannelsInputObjectSchema,
          ),
          z
            .lazy(
              () => GuildUpdateWithWhereUniqueWithoutChannelsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => GuildUpdateManyWithWhereWithoutChannelsInputObjectSchema,
          ),
          z
            .lazy(
              () => GuildUpdateManyWithWhereWithoutChannelsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => GuildScalarWhereInputObjectSchema),
          z.lazy(() => GuildScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const GuildUncheckedUpdateManyWithoutChannelsNestedInputObjectSchema =
  Schema;
