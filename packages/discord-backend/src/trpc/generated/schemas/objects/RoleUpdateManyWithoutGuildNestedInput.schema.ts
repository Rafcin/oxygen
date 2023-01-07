import { z } from 'zod';
import { RoleCreateWithoutGuildInputObjectSchema } from './RoleCreateWithoutGuildInput.schema';
import { RoleUncheckedCreateWithoutGuildInputObjectSchema } from './RoleUncheckedCreateWithoutGuildInput.schema';
import { RoleCreateOrConnectWithoutGuildInputObjectSchema } from './RoleCreateOrConnectWithoutGuildInput.schema';
import { RoleUpsertWithWhereUniqueWithoutGuildInputObjectSchema } from './RoleUpsertWithWhereUniqueWithoutGuildInput.schema';
import { RoleCreateManyGuildInputEnvelopeObjectSchema } from './RoleCreateManyGuildInputEnvelope.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithWhereUniqueWithoutGuildInputObjectSchema } from './RoleUpdateWithWhereUniqueWithoutGuildInput.schema';
import { RoleUpdateManyWithWhereWithoutGuildInputObjectSchema } from './RoleUpdateManyWithWhereWithoutGuildInput.schema';
import { RoleScalarWhereInputObjectSchema } from './RoleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateManyWithoutGuildNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RoleCreateWithoutGuildInputObjectSchema),
        z.lazy(() => RoleCreateWithoutGuildInputObjectSchema).array(),
        z.lazy(() => RoleUncheckedCreateWithoutGuildInputObjectSchema),
        z.lazy(() => RoleUncheckedCreateWithoutGuildInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoleCreateOrConnectWithoutGuildInputObjectSchema),
        z.lazy(() => RoleCreateOrConnectWithoutGuildInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => RoleUpsertWithWhereUniqueWithoutGuildInputObjectSchema),
        z
          .lazy(() => RoleUpsertWithWhereUniqueWithoutGuildInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoleCreateManyGuildInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RoleWhereUniqueInputObjectSchema),
        z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RoleWhereUniqueInputObjectSchema),
        z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RoleWhereUniqueInputObjectSchema),
        z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoleWhereUniqueInputObjectSchema),
        z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => RoleUpdateWithWhereUniqueWithoutGuildInputObjectSchema),
        z
          .lazy(() => RoleUpdateWithWhereUniqueWithoutGuildInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RoleUpdateManyWithWhereWithoutGuildInputObjectSchema),
        z
          .lazy(() => RoleUpdateManyWithWhereWithoutGuildInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RoleScalarWhereInputObjectSchema),
        z.lazy(() => RoleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const RoleUpdateManyWithoutGuildNestedInputObjectSchema = Schema;
