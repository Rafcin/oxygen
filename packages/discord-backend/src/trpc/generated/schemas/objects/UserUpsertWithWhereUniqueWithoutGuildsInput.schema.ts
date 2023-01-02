import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutGuildsInputObjectSchema } from './UserUpdateWithoutGuildsInput.schema';
import { UserUncheckedUpdateWithoutGuildsInputObjectSchema } from './UserUncheckedUpdateWithoutGuildsInput.schema';
import { UserCreateWithoutGuildsInputObjectSchema } from './UserCreateWithoutGuildsInput.schema';
import { UserUncheckedCreateWithoutGuildsInputObjectSchema } from './UserUncheckedCreateWithoutGuildsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutGuildsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => UserUpdateWithoutGuildsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutGuildsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutGuildsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutGuildsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithWhereUniqueWithoutGuildsInputObjectSchema = Schema;
