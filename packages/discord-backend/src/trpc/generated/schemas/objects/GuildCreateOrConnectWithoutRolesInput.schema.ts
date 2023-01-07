import { z } from 'zod';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';
import { GuildCreateWithoutRolesInputObjectSchema } from './GuildCreateWithoutRolesInput.schema';
import { GuildUncheckedCreateWithoutRolesInputObjectSchema } from './GuildUncheckedCreateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildCreateOrConnectWithoutRolesInput> = z
  .object({
    where: z.lazy(() => GuildWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => GuildCreateWithoutRolesInputObjectSchema),
      z.lazy(() => GuildUncheckedCreateWithoutRolesInputObjectSchema),
    ]),
  })
  .strict();

export const GuildCreateOrConnectWithoutRolesInputObjectSchema = Schema;
