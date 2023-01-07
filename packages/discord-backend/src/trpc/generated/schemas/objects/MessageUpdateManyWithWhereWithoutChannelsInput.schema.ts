import { z } from 'zod';
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';
import { MessageUpdateManyMutationInputObjectSchema } from './MessageUpdateManyMutationInput.schema';
import { MessageUncheckedUpdateManyWithoutMessageInputObjectSchema } from './MessageUncheckedUpdateManyWithoutMessageInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutChannelsInput> =
  z
    .object({
      where: z.lazy(() => MessageScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageUpdateManyMutationInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateManyWithoutMessageInputObjectSchema),
      ]),
    })
    .strict();

export const MessageUpdateManyWithWhereWithoutChannelsInputObjectSchema =
  Schema;
