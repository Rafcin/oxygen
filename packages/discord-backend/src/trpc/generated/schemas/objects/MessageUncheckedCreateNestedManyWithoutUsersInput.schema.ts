import { z } from 'zod';
import { MessageCreateWithoutUsersInputObjectSchema } from './MessageCreateWithoutUsersInput.schema';
import { MessageUncheckedCreateWithoutUsersInputObjectSchema } from './MessageUncheckedCreateWithoutUsersInput.schema';
import { MessageCreateOrConnectWithoutUsersInputObjectSchema } from './MessageCreateOrConnectWithoutUsersInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutUsersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MessageCreateWithoutUsersInputObjectSchema),
          z.lazy(() => MessageCreateWithoutUsersInputObjectSchema).array(),
          z.lazy(() => MessageUncheckedCreateWithoutUsersInputObjectSchema),
          z
            .lazy(() => MessageUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MessageCreateOrConnectWithoutUsersInputObjectSchema),
          z
            .lazy(() => MessageCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MessageUncheckedCreateNestedManyWithoutUsersInputObjectSchema =
  Schema;
