import { z } from 'zod';
import { ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithoutGuildsInputObjectSchema } from './ChannelUpdateWithoutGuildsInput.schema';
import { ChannelUncheckedUpdateWithoutGuildsInputObjectSchema } from './ChannelUncheckedUpdateWithoutGuildsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelUpdateWithWhereUniqueWithoutGuildsInput> =
  z
    .object({
      where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ChannelUpdateWithoutGuildsInputObjectSchema),
        z.lazy(() => ChannelUncheckedUpdateWithoutGuildsInputObjectSchema),
      ]),
    })
    .strict();

export const ChannelUpdateWithWhereUniqueWithoutGuildsInputObjectSchema =
  Schema;
