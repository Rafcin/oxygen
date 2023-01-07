import { z } from 'zod';
import { GuildCreateWithoutEmojisInputObjectSchema } from './GuildCreateWithoutEmojisInput.schema';
import { GuildUncheckedCreateWithoutEmojisInputObjectSchema } from './GuildUncheckedCreateWithoutEmojisInput.schema';
import { GuildCreateOrConnectWithoutEmojisInputObjectSchema } from './GuildCreateOrConnectWithoutEmojisInput.schema';
import { GuildUpsertWithoutEmojisInputObjectSchema } from './GuildUpsertWithoutEmojisInput.schema';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';
import { GuildUpdateWithoutEmojisInputObjectSchema } from './GuildUpdateWithoutEmojisInput.schema';
import { GuildUncheckedUpdateWithoutEmojisInputObjectSchema } from './GuildUncheckedUpdateWithoutEmojisInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildUpdateOneRequiredWithoutEmojisNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GuildCreateWithoutEmojisInputObjectSchema),
          z.lazy(() => GuildUncheckedCreateWithoutEmojisInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => GuildCreateOrConnectWithoutEmojisInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => GuildUpsertWithoutEmojisInputObjectSchema)
        .optional(),
      connect: z.lazy(() => GuildWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => GuildUpdateWithoutEmojisInputObjectSchema),
          z.lazy(() => GuildUncheckedUpdateWithoutEmojisInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const GuildUpdateOneRequiredWithoutEmojisNestedInputObjectSchema =
  Schema;
