import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutMessagesInputObjectSchema } from './UserUpdateWithoutMessagesInput.schema';
import { UserUncheckedUpdateWithoutMessagesInputObjectSchema } from './UserUncheckedUpdateWithoutMessagesInput.schema';
import { UserCreateWithoutMessagesInputObjectSchema } from './UserCreateWithoutMessagesInput.schema';
import { UserUncheckedCreateWithoutMessagesInputObjectSchema } from './UserUncheckedCreateWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutMessagesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutMessagesInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutMessagesInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutMessagesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutMessagesInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutMessagesInputObjectSchema = Schema;
