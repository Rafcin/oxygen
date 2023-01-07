import { z } from 'zod';
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';
import { MessageUpdateManyMutationInputObjectSchema } from './MessageUpdateManyMutationInput.schema';
import { MessageUncheckedUpdateManyWithoutMessagesInputObjectSchema } from './MessageUncheckedUpdateManyWithoutMessagesInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutReactionsInput> =
  z
    .object({
      where: z.lazy(() => MessageScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => MessageUncheckedUpdateManyWithoutMessagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MessageUpdateManyWithWhereWithoutReactionsInputObjectSchema =
  Schema;
