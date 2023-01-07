import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutEmojisInputObjectSchema } from './UserUpdateWithoutEmojisInput.schema';
import { UserUncheckedUpdateWithoutEmojisInputObjectSchema } from './UserUncheckedUpdateWithoutEmojisInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutEmojisInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateWithoutEmojisInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutEmojisInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpdateWithWhereUniqueWithoutEmojisInputObjectSchema = Schema;
