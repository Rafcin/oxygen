import { z } from 'zod';
import { GuildUpdateWithoutEmojisInputObjectSchema } from './GuildUpdateWithoutEmojisInput.schema';
import { GuildUncheckedUpdateWithoutEmojisInputObjectSchema } from './GuildUncheckedUpdateWithoutEmojisInput.schema';
import { GuildCreateWithoutEmojisInputObjectSchema } from './GuildCreateWithoutEmojisInput.schema';
import { GuildUncheckedCreateWithoutEmojisInputObjectSchema } from './GuildUncheckedCreateWithoutEmojisInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildUpsertWithoutEmojisInput> = z
  .object({
    update: z.union([
      z.lazy(() => GuildUpdateWithoutEmojisInputObjectSchema),
      z.lazy(() => GuildUncheckedUpdateWithoutEmojisInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => GuildCreateWithoutEmojisInputObjectSchema),
      z.lazy(() => GuildUncheckedCreateWithoutEmojisInputObjectSchema),
    ]),
  })
  .strict();

export const GuildUpsertWithoutEmojisInputObjectSchema = Schema;
