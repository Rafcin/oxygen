import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutChannelsInputObjectSchema } from './MessageCreateWithoutChannelsInput.schema';
import { MessageUncheckedCreateWithoutChannelsInputObjectSchema } from './MessageUncheckedCreateWithoutChannelsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateOrConnectWithoutChannelsInput> = z
  .object({
    where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MessageCreateWithoutChannelsInputObjectSchema),
      z.lazy(() => MessageUncheckedCreateWithoutChannelsInputObjectSchema),
    ]),
  })
  .strict();

export const MessageCreateOrConnectWithoutChannelsInputObjectSchema = Schema;
