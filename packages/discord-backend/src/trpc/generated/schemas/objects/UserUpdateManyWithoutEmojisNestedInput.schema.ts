import { z } from 'zod';
import { UserCreateWithoutEmojisInputObjectSchema } from './UserCreateWithoutEmojisInput.schema';
import { UserUncheckedCreateWithoutEmojisInputObjectSchema } from './UserUncheckedCreateWithoutEmojisInput.schema';
import { UserCreateOrConnectWithoutEmojisInputObjectSchema } from './UserCreateOrConnectWithoutEmojisInput.schema';
import { UserUpsertWithWhereUniqueWithoutEmojisInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutEmojisInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutEmojisInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutEmojisInput.schema';
import { UserUpdateManyWithWhereWithoutEmojisInputObjectSchema } from './UserUpdateManyWithWhereWithoutEmojisInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutEmojisNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutEmojisInputObjectSchema),
        z.lazy(() => UserCreateWithoutEmojisInputObjectSchema).array(),
        z.lazy(() => UserUncheckedCreateWithoutEmojisInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutEmojisInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UserCreateOrConnectWithoutEmojisInputObjectSchema),
        z.lazy(() => UserCreateOrConnectWithoutEmojisInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => UserUpsertWithWhereUniqueWithoutEmojisInputObjectSchema),
        z
          .lazy(() => UserUpsertWithWhereUniqueWithoutEmojisInputObjectSchema)
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
        z.lazy(() => UserUpdateWithWhereUniqueWithoutEmojisInputObjectSchema),
        z
          .lazy(() => UserUpdateWithWhereUniqueWithoutEmojisInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => UserUpdateManyWithWhereWithoutEmojisInputObjectSchema),
        z
          .lazy(() => UserUpdateManyWithWhereWithoutEmojisInputObjectSchema)
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

export const UserUpdateManyWithoutEmojisNestedInputObjectSchema = Schema;
