import { z } from 'zod';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';
import { GuildCreateWithoutUsersInputObjectSchema } from './GuildCreateWithoutUsersInput.schema';
import { GuildUncheckedCreateWithoutUsersInputObjectSchema } from './GuildUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.GuildCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => GuildWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => GuildCreateWithoutUsersInputObjectSchema),
      z.lazy(() => GuildUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const GuildCreateOrConnectWithoutUsersInputObjectSchema = Schema;
