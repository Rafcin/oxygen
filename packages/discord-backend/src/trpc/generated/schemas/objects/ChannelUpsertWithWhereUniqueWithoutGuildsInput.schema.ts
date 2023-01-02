import { z } from 'zod';
import { ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithoutGuildsInputObjectSchema } from './ChannelUpdateWithoutGuildsInput.schema';
import { ChannelUncheckedUpdateWithoutGuildsInputObjectSchema } from './ChannelUncheckedUpdateWithoutGuildsInput.schema';
import { ChannelCreateWithoutGuildsInputObjectSchema } from './ChannelCreateWithoutGuildsInput.schema';
import { ChannelUncheckedCreateWithoutGuildsInputObjectSchema } from './ChannelUncheckedCreateWithoutGuildsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelUpsertWithWhereUniqueWithoutGuildsInput> =
  z
    .object({
      where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ChannelUpdateWithoutGuildsInputObjectSchema),
        z.lazy(() => ChannelUncheckedUpdateWithoutGuildsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ChannelCreateWithoutGuildsInputObjectSchema),
        z.lazy(() => ChannelUncheckedCreateWithoutGuildsInputObjectSchema),
      ]),
    })
    .strict();

export const ChannelUpsertWithWhereUniqueWithoutGuildsInputObjectSchema =
  Schema;
