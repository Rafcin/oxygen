import { z } from 'zod';
import { MessageCreateWithoutReactionsInputObjectSchema } from './MessageCreateWithoutReactionsInput.schema';
import { MessageUncheckedCreateWithoutReactionsInputObjectSchema } from './MessageUncheckedCreateWithoutReactionsInput.schema';
import { MessageCreateOrConnectWithoutReactionsInputObjectSchema } from './MessageCreateOrConnectWithoutReactionsInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateNestedManyWithoutReactionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MessageCreateWithoutReactionsInputObjectSchema),
        z.lazy(() => MessageCreateWithoutReactionsInputObjectSchema).array(),
        z.lazy(() => MessageUncheckedCreateWithoutReactionsInputObjectSchema),
        z
          .lazy(() => MessageUncheckedCreateWithoutReactionsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MessageCreateOrConnectWithoutReactionsInputObjectSchema),
        z
          .lazy(() => MessageCreateOrConnectWithoutReactionsInputObjectSchema)
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

export const MessageCreateNestedManyWithoutReactionsInputObjectSchema = Schema;
