import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutGuildsInputObjectSchema } from './UserUpdateWithoutGuildsInput.schema';
import { UserUncheckedUpdateWithoutGuildsInputObjectSchema } from './UserUncheckedUpdateWithoutGuildsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutGuildsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateWithoutGuildsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutGuildsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpdateWithWhereUniqueWithoutGuildsInputObjectSchema = Schema;
