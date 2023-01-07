import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutReactionsInputObjectSchema } from './MessageUpdateWithoutReactionsInput.schema';
import { MessageUncheckedUpdateWithoutReactionsInputObjectSchema } from './MessageUncheckedUpdateWithoutReactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutReactionsInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageUpdateWithoutReactionsInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateWithoutReactionsInputObjectSchema),
      ]),
    })
    .strict();

export const MessageUpdateWithWhereUniqueWithoutReactionsInputObjectSchema =
  Schema;
