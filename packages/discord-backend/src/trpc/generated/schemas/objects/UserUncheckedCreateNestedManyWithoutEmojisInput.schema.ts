import { z } from 'zod';
import { UserCreateWithoutEmojisInputObjectSchema } from './UserCreateWithoutEmojisInput.schema';
import { UserUncheckedCreateWithoutEmojisInputObjectSchema } from './UserUncheckedCreateWithoutEmojisInput.schema';
import { UserCreateOrConnectWithoutEmojisInputObjectSchema } from './UserCreateOrConnectWithoutEmojisInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutEmojisInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutEmojisInputObjectSchema),
          z.lazy(() => UserCreateWithoutEmojisInputObjectSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutEmojisInputObjectSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutEmojisInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutEmojisInputObjectSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutEmojisInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedCreateNestedManyWithoutEmojisInputObjectSchema =
  Schema;
