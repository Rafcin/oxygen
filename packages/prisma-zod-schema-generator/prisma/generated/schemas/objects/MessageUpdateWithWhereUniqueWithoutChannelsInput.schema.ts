import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutChannelsInputObjectSchema } from './MessageUpdateWithoutChannelsInput.schema';
import { MessageUncheckedUpdateWithoutChannelsInputObjectSchema } from './MessageUncheckedUpdateWithoutChannelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutChannelsInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageUpdateWithoutChannelsInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateWithoutChannelsInputObjectSchema),
      ]),
    })
    .strict();

export const MessageUpdateWithWhereUniqueWithoutChannelsInputObjectSchema =
  Schema;
