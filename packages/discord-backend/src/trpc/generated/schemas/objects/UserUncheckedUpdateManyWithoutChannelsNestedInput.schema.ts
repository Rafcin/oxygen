import { z } from 'zod';
import { UserCreateWithoutChannelsInputObjectSchema } from './UserCreateWithoutChannelsInput.schema';
import { UserUncheckedCreateWithoutChannelsInputObjectSchema } from './UserUncheckedCreateWithoutChannelsInput.schema';
import { UserCreateOrConnectWithoutChannelsInputObjectSchema } from './UserCreateOrConnectWithoutChannelsInput.schema';
import { UserUpsertWithWhereUniqueWithoutChannelsInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutChannelsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutChannelsInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutChannelsInput.schema';
import { UserUpdateManyWithWhereWithoutChannelsInputObjectSchema } from './UserUpdateManyWithWhereWithoutChannelsInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutChannelsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutChannelsInputObjectSchema),
          z.lazy(() => UserCreateWithoutChannelsInputObjectSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutChannelsInputObjectSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutChannelsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutChannelsInputObjectSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutChannelsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => UserUpsertWithWhereUniqueWithoutChannelsInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUpsertWithWhereUniqueWithoutChannelsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => UserUpdateWithWhereUniqueWithoutChannelsInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUpdateWithWhereUniqueWithoutChannelsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => UserUpdateManyWithWhereWithoutChannelsInputObjectSchema),
          z
            .lazy(() => UserUpdateManyWithWhereWithoutChannelsInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserScalarWhereInputObjectSchema),
          z.lazy(() => UserScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateManyWithoutChannelsNestedInputObjectSchema =
  Schema;
