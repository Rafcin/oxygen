import { z } from 'zod';
import { GuildCreateWithoutEmojisInputObjectSchema } from './GuildCreateWithoutEmojisInput.schema';
import { GuildUncheckedCreateWithoutEmojisInputObjectSchema } from './GuildUncheckedCreateWithoutEmojisInput.schema';
import { GuildCreateOrConnectWithoutEmojisInputObjectSchema } from './GuildCreateOrConnectWithoutEmojisInput.schema';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.GuildCreateNestedOneWithoutEmojisInput> = z
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
    connect: z.lazy(() => GuildWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const GuildCreateNestedOneWithoutEmojisInputObjectSchema = Schema;
