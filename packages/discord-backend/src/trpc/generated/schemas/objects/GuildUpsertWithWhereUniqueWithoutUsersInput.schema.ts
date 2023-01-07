import { z } from 'zod';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';
import { GuildUpdateWithoutUsersInputObjectSchema } from './GuildUpdateWithoutUsersInput.schema';
import { GuildUncheckedUpdateWithoutUsersInputObjectSchema } from './GuildUncheckedUpdateWithoutUsersInput.schema';
import { GuildCreateWithoutUsersInputObjectSchema } from './GuildCreateWithoutUsersInput.schema';
import { GuildUncheckedCreateWithoutUsersInputObjectSchema } from './GuildUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildUpsertWithWhereUniqueWithoutUsersInput> = z
  .object({
    where: z.lazy(() => GuildWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => GuildUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => GuildUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => GuildCreateWithoutUsersInputObjectSchema),
      z.lazy(() => GuildUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const GuildUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
