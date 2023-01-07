import { z } from 'zod';
import { RoleCreateWithoutMessageInputObjectSchema } from './RoleCreateWithoutMessageInput.schema';
import { RoleUncheckedCreateWithoutMessageInputObjectSchema } from './RoleUncheckedCreateWithoutMessageInput.schema';
import { RoleCreateOrConnectWithoutMessageInputObjectSchema } from './RoleCreateOrConnectWithoutMessageInput.schema';
import { RoleUpsertWithWhereUniqueWithoutMessageInputObjectSchema } from './RoleUpsertWithWhereUniqueWithoutMessageInput.schema';
import { RoleCreateManyMessageInputEnvelopeObjectSchema } from './RoleCreateManyMessageInputEnvelope.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithWhereUniqueWithoutMessageInputObjectSchema } from './RoleUpdateWithWhereUniqueWithoutMessageInput.schema';
import { RoleUpdateManyWithWhereWithoutMessageInputObjectSchema } from './RoleUpdateManyWithWhereWithoutMessageInput.schema';
import { RoleScalarWhereInputObjectSchema } from './RoleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutMessageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleCreateWithoutMessageInputObjectSchema),
          z.lazy(() => RoleCreateWithoutMessageInputObjectSchema).array(),
          z.lazy(() => RoleUncheckedCreateWithoutMessageInputObjectSchema),
          z
            .lazy(() => RoleUncheckedCreateWithoutMessageInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RoleCreateOrConnectWithoutMessageInputObjectSchema),
          z
            .lazy(() => RoleCreateOrConnectWithoutMessageInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => RoleUpsertWithWhereUniqueWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () => RoleUpsertWithWhereUniqueWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RoleCreateManyMessageInputEnvelopeObjectSchema)
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
          z.lazy(
            () => RoleUpdateWithWhereUniqueWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () => RoleUpdateWithWhereUniqueWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => RoleUpdateManyWithWhereWithoutMessageInputObjectSchema),
          z
            .lazy(() => RoleUpdateManyWithWhereWithoutMessageInputObjectSchema)
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

export const RoleUncheckedUpdateManyWithoutMessageNestedInputObjectSchema =
  Schema;
