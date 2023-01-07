import { z } from 'zod';
import { ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithoutUsersInputObjectSchema } from './ChannelUpdateWithoutUsersInput.schema';
import { ChannelUncheckedUpdateWithoutUsersInputObjectSchema } from './ChannelUncheckedUpdateWithoutUsersInput.schema';
import { ChannelCreateWithoutUsersInputObjectSchema } from './ChannelCreateWithoutUsersInput.schema';
import { ChannelUncheckedCreateWithoutUsersInputObjectSchema } from './ChannelUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ChannelUpsertWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => ChannelWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ChannelUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => ChannelUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ChannelCreateWithoutUsersInputObjectSchema),
        z.lazy(() => ChannelUncheckedCreateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const ChannelUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
