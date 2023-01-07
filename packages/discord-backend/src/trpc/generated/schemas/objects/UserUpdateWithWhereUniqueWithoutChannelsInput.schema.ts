import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutChannelsInputObjectSchema } from './UserUpdateWithoutChannelsInput.schema';
import { UserUncheckedUpdateWithoutChannelsInputObjectSchema } from './UserUncheckedUpdateWithoutChannelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutChannelsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutChannelsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutChannelsInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutChannelsInputObjectSchema = Schema;
