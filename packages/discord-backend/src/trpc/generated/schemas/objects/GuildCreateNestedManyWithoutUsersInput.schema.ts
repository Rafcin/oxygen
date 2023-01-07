import { z } from 'zod';
import { GuildCreateWithoutUsersInputObjectSchema } from './GuildCreateWithoutUsersInput.schema';
import { GuildUncheckedCreateWithoutUsersInputObjectSchema } from './GuildUncheckedCreateWithoutUsersInput.schema';
import { GuildCreateOrConnectWithoutUsersInputObjectSchema } from './GuildCreateOrConnectWithoutUsersInput.schema';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.GuildCreateNestedManyWithoutUsersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => GuildCreateWithoutUsersInputObjectSchema),
        z.lazy(() => GuildCreateWithoutUsersInputObjectSchema).array(),
        z.lazy(() => GuildUncheckedCreateWithoutUsersInputObjectSchema),
        z.lazy(() => GuildUncheckedCreateWithoutUsersInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => GuildCreateOrConnectWithoutUsersInputObjectSchema),
        z.lazy(() => GuildCreateOrConnectWithoutUsersInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => GuildWhereUniqueInputObjectSchema),
        z.lazy(() => GuildWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const GuildCreateNestedManyWithoutUsersInputObjectSchema = Schema;
