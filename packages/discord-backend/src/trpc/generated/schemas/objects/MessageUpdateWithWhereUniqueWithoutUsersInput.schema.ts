import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutUsersInputObjectSchema } from './MessageUpdateWithoutUsersInput.schema';
import { MessageUncheckedUpdateWithoutUsersInputObjectSchema } from './MessageUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const MessageUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
