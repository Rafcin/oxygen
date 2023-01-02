import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutMessagesInputObjectSchema } from './UserUpdateWithoutMessagesInput.schema';
import { UserUncheckedUpdateWithoutMessagesInputObjectSchema } from './UserUncheckedUpdateWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutMessagesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutMessagesInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutMessagesInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutMessagesInputObjectSchema = Schema;
