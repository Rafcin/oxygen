import { z } from 'zod';
import { MessageCreateWithoutUsersInputObjectSchema } from './MessageCreateWithoutUsersInput.schema';
import { MessageUncheckedCreateWithoutUsersInputObjectSchema } from './MessageUncheckedCreateWithoutUsersInput.schema';
import { MessageCreateOrConnectWithoutUsersInputObjectSchema } from './MessageCreateOrConnectWithoutUsersInput.schema';
import { MessageUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutUsersInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutUsersInput.schema';
import { MessageUpdateManyWithWhereWithoutUsersInputObjectSchema } from './MessageUpdateManyWithWhereWithoutUsersInput.schema';
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateManyWithoutUsersNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => MessageUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => MessageUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => MessageWhereUniqueInputObjectSchema),
        z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => MessageWhereUniqueInputObjectSchema),
        z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => MessageWhereUniqueInputObjectSchema),
        z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => MessageWhereUniqueInputObjectSchema),
        z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => MessageUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => MessageUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MessageUpdateManyWithWhereWithoutUsersInputObjectSchema),
        z
          .lazy(() => MessageUpdateManyWithWhereWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => MessageScalarWhereInputObjectSchema),
        z.lazy(() => MessageScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MessageUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
