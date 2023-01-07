import { z } from 'zod';
import { ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelCreateWithoutMessageInputObjectSchema } from './ChannelCreateWithoutMessageInput.schema';
import { ChannelUncheckedCreateWithoutMessageInputObjectSchema } from './ChannelUncheckedCreateWithoutMessageInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ChannelCreateOrConnectWithoutMessageInput> = z
  .object({
    where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ChannelCreateWithoutMessageInputObjectSchema),
      z.lazy(() => ChannelUncheckedCreateWithoutMessageInputObjectSchema),
    ]),
  })
  .strict();

export const ChannelCreateOrConnectWithoutMessageInputObjectSchema = Schema;
