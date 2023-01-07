import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutEmojisInputObjectSchema } from './UserCreateWithoutEmojisInput.schema';
import { UserUncheckedCreateWithoutEmojisInputObjectSchema } from './UserUncheckedCreateWithoutEmojisInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutEmojisInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutEmojisInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutEmojisInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutEmojisInputObjectSchema = Schema;
