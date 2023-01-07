import { z } from 'zod';
import { ChannelCreateWithoutMessageInputObjectSchema } from './ChannelCreateWithoutMessageInput.schema';
import { ChannelUncheckedCreateWithoutMessageInputObjectSchema } from './ChannelUncheckedCreateWithoutMessageInput.schema';
import { ChannelCreateOrConnectWithoutMessageInputObjectSchema } from './ChannelCreateOrConnectWithoutMessageInput.schema';
import { ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelUncheckedCreateNestedManyWithoutMessageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ChannelCreateWithoutMessageInputObjectSchema),
          z.lazy(() => ChannelCreateWithoutMessageInputObjectSchema).array(),
          z.lazy(() => ChannelUncheckedCreateWithoutMessageInputObjectSchema),
          z
            .lazy(() => ChannelUncheckedCreateWithoutMessageInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ChannelCreateOrConnectWithoutMessageInputObjectSchema),
          z
            .lazy(() => ChannelCreateOrConnectWithoutMessageInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ChannelWhereUniqueInputObjectSchema),
          z.lazy(() => ChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ChannelUncheckedCreateNestedManyWithoutMessageInputObjectSchema =
  Schema;
