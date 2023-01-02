import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutChannelsInputObjectSchema } from './UserCreateWithoutChannelsInput.schema';
import { UserUncheckedCreateWithoutChannelsInputObjectSchema } from './UserUncheckedCreateWithoutChannelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutChannelsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutChannelsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutChannelsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutChannelsInputObjectSchema = Schema;
