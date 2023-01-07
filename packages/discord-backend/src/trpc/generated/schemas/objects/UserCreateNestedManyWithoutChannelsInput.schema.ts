import { z } from 'zod';
import { UserCreateWithoutChannelsInputObjectSchema } from './UserCreateWithoutChannelsInput.schema';
import { UserUncheckedCreateWithoutChannelsInputObjectSchema } from './UserUncheckedCreateWithoutChannelsInput.schema';
import { UserCreateOrConnectWithoutChannelsInputObjectSchema } from './UserCreateOrConnectWithoutChannelsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedManyWithoutChannelsInput> = z
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
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserCreateNestedManyWithoutChannelsInputObjectSchema = Schema;
