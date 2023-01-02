import { z } from 'zod';
import { RoleCreateWithoutGuildInputObjectSchema } from './RoleCreateWithoutGuildInput.schema';
import { RoleUncheckedCreateWithoutGuildInputObjectSchema } from './RoleUncheckedCreateWithoutGuildInput.schema';
import { RoleCreateOrConnectWithoutGuildInputObjectSchema } from './RoleCreateOrConnectWithoutGuildInput.schema';
import { RoleCreateManyGuildInputEnvelopeObjectSchema } from './RoleCreateManyGuildInputEnvelope.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedCreateNestedManyWithoutGuildInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleCreateWithoutGuildInputObjectSchema),
          z.lazy(() => RoleCreateWithoutGuildInputObjectSchema).array(),
          z.lazy(() => RoleUncheckedCreateWithoutGuildInputObjectSchema),
          z
            .lazy(() => RoleUncheckedCreateWithoutGuildInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RoleCreateOrConnectWithoutGuildInputObjectSchema),
          z
            .lazy(() => RoleCreateOrConnectWithoutGuildInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RoleCreateManyGuildInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RoleWhereUniqueInputObjectSchema),
          z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RoleUncheckedCreateNestedManyWithoutGuildInputObjectSchema =
  Schema;
