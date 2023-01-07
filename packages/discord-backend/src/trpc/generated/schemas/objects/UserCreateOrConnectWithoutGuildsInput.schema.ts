import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutGuildsInputObjectSchema } from './UserCreateWithoutGuildsInput.schema';
import { UserUncheckedCreateWithoutGuildsInputObjectSchema } from './UserUncheckedCreateWithoutGuildsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutGuildsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutGuildsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutGuildsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutGuildsInputObjectSchema = Schema;
