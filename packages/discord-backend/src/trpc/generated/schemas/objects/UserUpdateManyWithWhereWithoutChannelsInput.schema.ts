import { z } from 'zod';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutUsersInputObjectSchema } from './UserUncheckedUpdateManyWithoutUsersInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutChannelsInput> = z
  .object({
    where: z.lazy(() => UserScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateManyMutationInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateManyWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpdateManyWithWhereWithoutChannelsInputObjectSchema = Schema;
