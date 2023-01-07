import { z } from 'zod';
import { ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithoutUsersInputObjectSchema } from './ChannelUpdateWithoutUsersInput.schema';
import { ChannelUncheckedUpdateWithoutUsersInputObjectSchema } from './ChannelUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelUpdateWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ChannelUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => ChannelUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const ChannelUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
