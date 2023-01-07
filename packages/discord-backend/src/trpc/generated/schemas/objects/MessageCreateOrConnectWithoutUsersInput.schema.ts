import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutUsersInputObjectSchema } from './MessageCreateWithoutUsersInput.schema';
import { MessageUncheckedCreateWithoutUsersInputObjectSchema } from './MessageUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MessageCreateWithoutUsersInputObjectSchema),
      z.lazy(() => MessageUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const MessageCreateOrConnectWithoutUsersInputObjectSchema = Schema;
