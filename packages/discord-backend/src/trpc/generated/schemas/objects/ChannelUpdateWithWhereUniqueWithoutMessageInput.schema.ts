import { z } from 'zod';
import { ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithoutMessageInputObjectSchema } from './ChannelUpdateWithoutMessageInput.schema';
import { ChannelUncheckedUpdateWithoutMessageInputObjectSchema } from './ChannelUncheckedUpdateWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelUpdateWithWhereUniqueWithoutMessageInput> =
  z
    .object({
      where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ChannelUpdateWithoutMessageInputObjectSchema),
        z.lazy(() => ChannelUncheckedUpdateWithoutMessageInputObjectSchema),
      ]),
    })
    .strict();

export const ChannelUpdateWithWhereUniqueWithoutMessageInputObjectSchema =
  Schema;
