import { z } from 'zod';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';
import { GuildCreateWithoutChannelsInputObjectSchema } from './GuildCreateWithoutChannelsInput.schema';
import { GuildUncheckedCreateWithoutChannelsInputObjectSchema } from './GuildUncheckedCreateWithoutChannelsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.GuildCreateOrConnectWithoutChannelsInput> = z
  .object({
    where: z.lazy(() => GuildWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => GuildCreateWithoutChannelsInputObjectSchema),
      z.lazy(() => GuildUncheckedCreateWithoutChannelsInputObjectSchema),
    ]),
  })
  .strict();

export const GuildCreateOrConnectWithoutChannelsInputObjectSchema = Schema;
