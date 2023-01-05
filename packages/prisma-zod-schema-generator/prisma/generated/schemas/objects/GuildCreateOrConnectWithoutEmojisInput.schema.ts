import { z } from 'zod';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';
import { GuildCreateWithoutEmojisInputObjectSchema } from './GuildCreateWithoutEmojisInput.schema';
import { GuildUncheckedCreateWithoutEmojisInputObjectSchema } from './GuildUncheckedCreateWithoutEmojisInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildCreateOrConnectWithoutEmojisInput> = z
  .object({
    where: z.lazy(() => GuildWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => GuildCreateWithoutEmojisInputObjectSchema),
      z.lazy(() => GuildUncheckedCreateWithoutEmojisInputObjectSchema),
    ]),
  })
  .strict();

export const GuildCreateOrConnectWithoutEmojisInputObjectSchema = Schema;
