import { z } from 'zod';
import { MessageCreateWithoutChannelsInputObjectSchema } from './MessageCreateWithoutChannelsInput.schema';
import { MessageUncheckedCreateWithoutChannelsInputObjectSchema } from './MessageUncheckedCreateWithoutChannelsInput.schema';
import { MessageCreateOrConnectWithoutChannelsInputObjectSchema } from './MessageCreateOrConnectWithoutChannelsInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateNestedManyWithoutChannelsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MessageCreateWithoutChannelsInputObjectSchema),
        z.lazy(() => MessageCreateWithoutChannelsInputObjectSchema).array(),
        z.lazy(() => MessageUncheckedCreateWithoutChannelsInputObjectSchema),
        z
          .lazy(() => MessageUncheckedCreateWithoutChannelsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MessageCreateOrConnectWithoutChannelsInputObjectSchema),
        z
          .lazy(() => MessageCreateOrConnectWithoutChannelsInputObjectSchema)
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

export const MessageCreateNestedManyWithoutChannelsInputObjectSchema = Schema;
