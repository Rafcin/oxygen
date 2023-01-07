import { z } from 'zod';
import { ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelCreateWithoutGuildsInputObjectSchema } from './ChannelCreateWithoutGuildsInput.schema';
import { ChannelUncheckedCreateWithoutGuildsInputObjectSchema } from './ChannelUncheckedCreateWithoutGuildsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ChannelCreateOrConnectWithoutGuildsInput> = z
  .object({
    where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ChannelCreateWithoutGuildsInputObjectSchema),
      z.lazy(() => ChannelUncheckedCreateWithoutGuildsInputObjectSchema),
    ]),
  })
  .strict();

export const ChannelCreateOrConnectWithoutGuildsInputObjectSchema = Schema;
