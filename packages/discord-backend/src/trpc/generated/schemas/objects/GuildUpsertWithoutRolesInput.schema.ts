import { z } from 'zod';
import { GuildUpdateWithoutRolesInputObjectSchema } from './GuildUpdateWithoutRolesInput.schema';
import { GuildUncheckedUpdateWithoutRolesInputObjectSchema } from './GuildUncheckedUpdateWithoutRolesInput.schema';
import { GuildCreateWithoutRolesInputObjectSchema } from './GuildCreateWithoutRolesInput.schema';
import { GuildUncheckedCreateWithoutRolesInputObjectSchema } from './GuildUncheckedCreateWithoutRolesInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.GuildUpsertWithoutRolesInput> = z
  .object({
    update: z.union([
      z.lazy(() => GuildUpdateWithoutRolesInputObjectSchema),
      z.lazy(() => GuildUncheckedUpdateWithoutRolesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => GuildCreateWithoutRolesInputObjectSchema),
      z.lazy(() => GuildUncheckedCreateWithoutRolesInputObjectSchema),
    ]),
  })
  .strict();

export const GuildUpsertWithoutRolesInputObjectSchema = Schema;
