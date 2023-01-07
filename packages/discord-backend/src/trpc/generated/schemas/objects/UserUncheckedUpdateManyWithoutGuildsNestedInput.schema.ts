import { z } from 'zod';
import { UserCreateWithoutGuildsInputObjectSchema } from './UserCreateWithoutGuildsInput.schema';
import { UserUncheckedCreateWithoutGuildsInputObjectSchema } from './UserUncheckedCreateWithoutGuildsInput.schema';
import { UserCreateOrConnectWithoutGuildsInputObjectSchema } from './UserCreateOrConnectWithoutGuildsInput.schema';
import { UserUpsertWithWhereUniqueWithoutGuildsInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutGuildsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutGuildsInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutGuildsInput.schema';
import { UserUpdateManyWithWhereWithoutGuildsInputObjectSchema } from './UserUpdateManyWithWhereWithoutGuildsInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutGuildsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutGuildsInputObjectSchema),
          z.lazy(() => UserCreateWithoutGuildsInputObjectSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutGuildsInputObjectSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutGuildsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutGuildsInputObjectSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutGuildsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => UserUpsertWithWhereUniqueWithoutGuildsInputObjectSchema),
          z
            .lazy(() => UserUpsertWithWhereUniqueWithoutGuildsInputObjectSchema)
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
          z.lazy(() => UserUpdateWithWhereUniqueWithoutGuildsInputObjectSchema),
          z
            .lazy(() => UserUpdateWithWhereUniqueWithoutGuildsInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => UserUpdateManyWithWhereWithoutGuildsInputObjectSchema),
          z
            .lazy(() => UserUpdateManyWithWhereWithoutGuildsInputObjectSchema)
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

export const UserUncheckedUpdateManyWithoutGuildsNestedInputObjectSchema =
  Schema;
