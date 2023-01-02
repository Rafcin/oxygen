import { z } from 'zod';
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';
import { MessageUpdateManyMutationInputObjectSchema } from './MessageUpdateManyMutationInput.schema';
import { MessageUncheckedUpdateManyWithoutMessagesInputObjectSchema } from './MessageUncheckedUpdateManyWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutUsersInput> = z
  .object({
    where: z.lazy(() => MessageScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => MessageUpdateManyMutationInputObjectSchema),
      z.lazy(() => MessageUncheckedUpdateManyWithoutMessagesInputObjectSchema),
    ]),
  })
  .strict();

export const MessageUpdateManyWithWhereWithoutUsersInputObjectSchema = Schema;
