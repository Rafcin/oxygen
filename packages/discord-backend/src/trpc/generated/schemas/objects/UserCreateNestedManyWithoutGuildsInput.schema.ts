import { z } from 'zod';
import { UserCreateWithoutGuildsInputObjectSchema } from './UserCreateWithoutGuildsInput.schema';
import { UserUncheckedCreateWithoutGuildsInputObjectSchema } from './UserUncheckedCreateWithoutGuildsInput.schema';
import { UserCreateOrConnectWithoutGuildsInputObjectSchema } from './UserCreateOrConnectWithoutGuildsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedManyWithoutGuildsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutGuildsInputObjectSchema),
        z.lazy(() => UserCreateWithoutGuildsInputObjectSchema).array(),
        z.lazy(() => UserUncheckedCreateWithoutGuildsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutGuildsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UserCreateOrConnectWithoutGuildsInputObjectSchema),
        z.lazy(() => UserCreateOrConnectWithoutGuildsInputObjectSchema).array(),
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

export const UserCreateNestedManyWithoutGuildsInputObjectSchema = Schema;
