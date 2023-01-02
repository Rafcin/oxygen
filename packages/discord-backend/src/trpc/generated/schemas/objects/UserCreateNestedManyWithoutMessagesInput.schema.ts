import { z } from 'zod';
import { UserCreateWithoutMessagesInputObjectSchema } from './UserCreateWithoutMessagesInput.schema';
import { UserUncheckedCreateWithoutMessagesInputObjectSchema } from './UserUncheckedCreateWithoutMessagesInput.schema';
import { UserCreateOrConnectWithoutMessagesInputObjectSchema } from './UserCreateOrConnectWithoutMessagesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedManyWithoutMessagesInput> = z
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
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserCreateNestedManyWithoutMessagesInputObjectSchema = Schema;
