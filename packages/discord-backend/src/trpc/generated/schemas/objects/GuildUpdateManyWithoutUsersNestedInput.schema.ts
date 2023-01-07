import { z } from 'zod';
import { GuildCreateWithoutUsersInputObjectSchema } from './GuildCreateWithoutUsersInput.schema';
import { GuildUncheckedCreateWithoutUsersInputObjectSchema } from './GuildUncheckedCreateWithoutUsersInput.schema';
import { GuildCreateOrConnectWithoutUsersInputObjectSchema } from './GuildCreateOrConnectWithoutUsersInput.schema';
import { GuildUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './GuildUpsertWithWhereUniqueWithoutUsersInput.schema';
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema';
import { GuildUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './GuildUpdateWithWhereUniqueWithoutUsersInput.schema';
import { GuildUpdateManyWithWhereWithoutUsersInputObjectSchema } from './GuildUpdateManyWithWhereWithoutUsersInput.schema';
import { GuildScalarWhereInputObjectSchema } from './GuildScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildUpdateManyWithoutUsersNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => GuildUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => GuildUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => GuildWhereUniqueInputObjectSchema),
        z.lazy(() => GuildWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => GuildWhereUniqueInputObjectSchema),
        z.lazy(() => GuildWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => GuildWhereUniqueInputObjectSchema),
        z.lazy(() => GuildWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => GuildWhereUniqueInputObjectSchema),
        z.lazy(() => GuildWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => GuildUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => GuildUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => GuildUpdateManyWithWhereWithoutUsersInputObjectSchema),
        z
          .lazy(() => GuildUpdateManyWithWhereWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => GuildScalarWhereInputObjectSchema),
        z.lazy(() => GuildScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const GuildUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
