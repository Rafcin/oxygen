import { z } from 'zod';
import { UserCreateWithoutMessagesInputObjectSchema } from './UserCreateWithoutMessagesInput.schema';
import { UserUncheckedCreateWithoutMessagesInputObjectSchema } from './UserUncheckedCreateWithoutMessagesInput.schema';
import { UserCreateOrConnectWithoutMessagesInputObjectSchema } from './UserCreateOrConnectWithoutMessagesInput.schema';
import { UserUpsertWithWhereUniqueWithoutMessagesInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutMessagesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutMessagesInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutMessagesInput.schema';
import { UserUpdateManyWithWhereWithoutMessagesInputObjectSchema } from './UserUpdateManyWithWhereWithoutMessagesInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutMessagesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutMessagesInputObjectSchema),
          z.lazy(() => UserCreateWithoutMessagesInputObjectSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutMessagesInputObjectSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutMessagesInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutMessagesInputObjectSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutMessagesInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => UserUpsertWithWhereUniqueWithoutMessagesInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUpsertWithWhereUniqueWithoutMessagesInputObjectSchema,
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
            () => UserUpdateWithWhereUniqueWithoutMessagesInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUpdateWithWhereUniqueWithoutMessagesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => UserUpdateManyWithWhereWithoutMessagesInputObjectSchema),
          z
            .lazy(() => UserUpdateManyWithWhereWithoutMessagesInputObjectSchema)
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

export const UserUncheckedUpdateManyWithoutMessagesNestedInputObjectSchema =
  Schema;
