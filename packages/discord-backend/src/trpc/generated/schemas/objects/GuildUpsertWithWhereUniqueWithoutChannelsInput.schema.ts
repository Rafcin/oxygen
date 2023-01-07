import { z } from 'zod';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';
import { GuildUpdateWithoutChannelsInputObjectSchema } from './GuildUpdateWithoutChannelsInput.schema';
import { GuildUncheckedUpdateWithoutChannelsInputObjectSchema } from './GuildUncheckedUpdateWithoutChannelsInput.schema';
import { GuildCreateWithoutChannelsInputObjectSchema } from './GuildCreateWithoutChannelsInput.schema';
import { GuildUncheckedCreateWithoutChannelsInputObjectSchema } from './GuildUncheckedCreateWithoutChannelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildUpsertWithWhereUniqueWithoutChannelsInput> =
  z
    .object({
      where: z.lazy(() => GuildWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => GuildUpdateWithoutChannelsInputObjectSchema),
        z.lazy(() => GuildUncheckedUpdateWithoutChannelsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => GuildCreateWithoutChannelsInputObjectSchema),
        z.lazy(() => GuildUncheckedCreateWithoutChannelsInputObjectSchema),
      ]),
    })
    .strict();

export const GuildUpsertWithWhereUniqueWithoutChannelsInputObjectSchema =
  Schema;
