import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutUsersInputObjectSchema } from './MessageUpdateWithoutUsersInput.schema';
import { MessageUncheckedUpdateWithoutUsersInputObjectSchema } from './MessageUncheckedUpdateWithoutUsersInput.schema';
import { MessageCreateWithoutUsersInputObjectSchema } from './MessageCreateWithoutUsersInput.schema';
import { MessageUncheckedCreateWithoutUsersInputObjectSchema } from './MessageUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MessageUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MessageCreateWithoutUsersInputObjectSchema),
        z.lazy(() => MessageUncheckedCreateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const MessageUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
