import { z } from 'zod';
import { GuildCreateWithoutRolesInputObjectSchema } from './GuildCreateWithoutRolesInput.schema';
import { GuildUncheckedCreateWithoutRolesInputObjectSchema } from './GuildUncheckedCreateWithoutRolesInput.schema';
import { GuildCreateOrConnectWithoutRolesInputObjectSchema } from './GuildCreateOrConnectWithoutRolesInput.schema';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.GuildCreateNestedOneWithoutRolesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => GuildCreateWithoutRolesInputObjectSchema),
        z.lazy(() => GuildUncheckedCreateWithoutRolesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => GuildCreateOrConnectWithoutRolesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => GuildWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const GuildCreateNestedOneWithoutRolesInputObjectSchema = Schema;
