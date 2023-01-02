import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutChannelsInputObjectSchema } from './MessageUpdateWithoutChannelsInput.schema';
import { MessageUncheckedUpdateWithoutChannelsInputObjectSchema } from './MessageUncheckedUpdateWithoutChannelsInput.schema';
import { MessageCreateWithoutChannelsInputObjectSchema } from './MessageCreateWithoutChannelsInput.schema';
import { MessageUncheckedCreateWithoutChannelsInputObjectSchema } from './MessageUncheckedCreateWithoutChannelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutChannelsInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MessageUpdateWithoutChannelsInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateWithoutChannelsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MessageCreateWithoutChannelsInputObjectSchema),
        z.lazy(() => MessageUncheckedCreateWithoutChannelsInputObjectSchema),
      ]),
    })
    .strict();

export const MessageUpsertWithWhereUniqueWithoutChannelsInputObjectSchema =
  Schema;
