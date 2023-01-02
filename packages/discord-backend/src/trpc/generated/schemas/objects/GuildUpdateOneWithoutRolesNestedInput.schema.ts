import { z } from 'zod';
import { GuildCreateWithoutRolesInputObjectSchema } from './GuildCreateWithoutRolesInput.schema';
import { GuildUncheckedCreateWithoutRolesInputObjectSchema } from './GuildUncheckedCreateWithoutRolesInput.schema';
import { GuildCreateOrConnectWithoutRolesInputObjectSchema } from './GuildCreateOrConnectWithoutRolesInput.schema';
import { GuildUpsertWithoutRolesInputObjectSchema } from './GuildUpsertWithoutRolesInput.schema';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';
import { GuildUpdateWithoutRolesInputObjectSchema } from './GuildUpdateWithoutRolesInput.schema';
import { GuildUncheckedUpdateWithoutRolesInputObjectSchema } from './GuildUncheckedUpdateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildUpdateOneWithoutRolesNestedInput> = z
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
    upsert: z.lazy(() => GuildUpsertWithoutRolesInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => GuildWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => GuildUpdateWithoutRolesInputObjectSchema),
        z.lazy(() => GuildUncheckedUpdateWithoutRolesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const GuildUpdateOneWithoutRolesNestedInputObjectSchema = Schema;
