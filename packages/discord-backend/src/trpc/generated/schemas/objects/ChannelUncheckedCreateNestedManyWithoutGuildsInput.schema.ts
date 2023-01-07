import { z } from 'zod';
import { ChannelCreateWithoutGuildsInputObjectSchema } from './ChannelCreateWithoutGuildsInput.schema';
import { ChannelUncheckedCreateWithoutGuildsInputObjectSchema } from './ChannelUncheckedCreateWithoutGuildsInput.schema';
import { ChannelCreateOrConnectWithoutGuildsInputObjectSchema } from './ChannelCreateOrConnectWithoutGuildsInput.schema';
import { ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ChannelUncheckedCreateNestedManyWithoutGuildsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ChannelCreateWithoutGuildsInputObjectSchema),
          z.lazy(() => ChannelCreateWithoutGuildsInputObjectSchema).array(),
          z.lazy(() => ChannelUncheckedCreateWithoutGuildsInputObjectSchema),
          z
            .lazy(() => ChannelUncheckedCreateWithoutGuildsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ChannelCreateOrConnectWithoutGuildsInputObjectSchema),
          z
            .lazy(() => ChannelCreateOrConnectWithoutGuildsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ChannelWhereUniqueInputObjectSchema),
          z.lazy(() => ChannelWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ChannelUncheckedCreateNestedManyWithoutGuildsInputObjectSchema =
  Schema;
