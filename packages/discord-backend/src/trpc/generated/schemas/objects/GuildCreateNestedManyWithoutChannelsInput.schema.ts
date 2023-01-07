import { z } from 'zod';
import { GuildCreateWithoutChannelsInputObjectSchema } from './GuildCreateWithoutChannelsInput.schema';
import { GuildUncheckedCreateWithoutChannelsInputObjectSchema } from './GuildUncheckedCreateWithoutChannelsInput.schema';
import { GuildCreateOrConnectWithoutChannelsInputObjectSchema } from './GuildCreateOrConnectWithoutChannelsInput.schema';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.GuildCreateNestedManyWithoutChannelsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => GuildCreateWithoutChannelsInputObjectSchema),
        z.lazy(() => GuildCreateWithoutChannelsInputObjectSchema).array(),
        z.lazy(() => GuildUncheckedCreateWithoutChannelsInputObjectSchema),
        z
          .lazy(() => GuildUncheckedCreateWithoutChannelsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => GuildCreateOrConnectWithoutChannelsInputObjectSchema),
        z
          .lazy(() => GuildCreateOrConnectWithoutChannelsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => GuildWhereUniqueInputObjectSchema),
        z.lazy(() => GuildWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const GuildCreateNestedManyWithoutChannelsInputObjectSchema = Schema;
