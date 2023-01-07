import { z } from 'zod';
import { ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithoutMessageInputObjectSchema } from './ChannelUpdateWithoutMessageInput.schema';
import { ChannelUncheckedUpdateWithoutMessageInputObjectSchema } from './ChannelUncheckedUpdateWithoutMessageInput.schema';
import { ChannelCreateWithoutMessageInputObjectSchema } from './ChannelCreateWithoutMessageInput.schema';
import { ChannelUncheckedCreateWithoutMessageInputObjectSchema } from './ChannelUncheckedCreateWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelUpsertWithWhereUniqueWithoutMessageInput> =
  z
    .object({
      where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ChannelUpdateWithoutMessageInputObjectSchema),
        z.lazy(() => ChannelUncheckedUpdateWithoutMessageInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ChannelCreateWithoutMessageInputObjectSchema),
        z.lazy(() => ChannelUncheckedCreateWithoutMessageInputObjectSchema),
      ]),
    })
    .strict();

export const ChannelUpsertWithWhereUniqueWithoutMessageInputObjectSchema =
  Schema;
