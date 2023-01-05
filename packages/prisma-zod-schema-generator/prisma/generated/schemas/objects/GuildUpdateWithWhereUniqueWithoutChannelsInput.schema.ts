import { z } from 'zod';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';
import { GuildUpdateWithoutChannelsInputObjectSchema } from './GuildUpdateWithoutChannelsInput.schema';
import { GuildUncheckedUpdateWithoutChannelsInputObjectSchema } from './GuildUncheckedUpdateWithoutChannelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildUpdateWithWhereUniqueWithoutChannelsInput> =
  z
    .object({
      where: z.lazy(() => GuildWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => GuildUpdateWithoutChannelsInputObjectSchema),
        z.lazy(() => GuildUncheckedUpdateWithoutChannelsInputObjectSchema),
      ]),
    })
    .strict();

export const GuildUpdateWithWhereUniqueWithoutChannelsInputObjectSchema =
  Schema;
