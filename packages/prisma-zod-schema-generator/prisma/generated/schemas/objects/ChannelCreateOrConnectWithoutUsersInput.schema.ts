import { z } from 'zod';
import { ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelCreateWithoutUsersInputObjectSchema } from './ChannelCreateWithoutUsersInput.schema';
import { ChannelUncheckedCreateWithoutUsersInputObjectSchema } from './ChannelUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ChannelCreateWithoutUsersInputObjectSchema),
      z.lazy(() => ChannelUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const ChannelCreateOrConnectWithoutUsersInputObjectSchema = Schema;
