import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutChannelsInputObjectSchema } from './UserUpdateWithoutChannelsInput.schema';
import { UserUncheckedUpdateWithoutChannelsInputObjectSchema } from './UserUncheckedUpdateWithoutChannelsInput.schema';
import { UserCreateWithoutChannelsInputObjectSchema } from './UserCreateWithoutChannelsInput.schema';
import { UserUncheckedCreateWithoutChannelsInputObjectSchema } from './UserUncheckedCreateWithoutChannelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutChannelsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutChannelsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutChannelsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutChannelsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutChannelsInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutChannelsInputObjectSchema = Schema;
