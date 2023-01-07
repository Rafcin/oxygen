import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutEmojisInputObjectSchema } from './UserUpdateWithoutEmojisInput.schema';
import { UserUncheckedUpdateWithoutEmojisInputObjectSchema } from './UserUncheckedUpdateWithoutEmojisInput.schema';
import { UserCreateWithoutEmojisInputObjectSchema } from './UserCreateWithoutEmojisInput.schema';
import { UserUncheckedCreateWithoutEmojisInputObjectSchema } from './UserUncheckedCreateWithoutEmojisInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutEmojisInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => UserUpdateWithoutEmojisInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutEmojisInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutEmojisInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutEmojisInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithWhereUniqueWithoutEmojisInputObjectSchema = Schema;
