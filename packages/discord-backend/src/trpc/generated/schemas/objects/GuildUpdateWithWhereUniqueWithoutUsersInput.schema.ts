import { z } from 'zod';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';
import { GuildUpdateWithoutUsersInputObjectSchema } from './GuildUpdateWithoutUsersInput.schema';
import { GuildUncheckedUpdateWithoutUsersInputObjectSchema } from './GuildUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.GuildUpdateWithWhereUniqueWithoutUsersInput> = z
  .object({
    where: z.lazy(() => GuildWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => GuildUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => GuildUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const GuildUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
