import { z } from 'zod';
import { RoleCreateWithoutEmojiInputObjectSchema } from './RoleCreateWithoutEmojiInput.schema';
import { RoleUncheckedCreateWithoutEmojiInputObjectSchema } from './RoleUncheckedCreateWithoutEmojiInput.schema';
import { RoleCreateOrConnectWithoutEmojiInputObjectSchema } from './RoleCreateOrConnectWithoutEmojiInput.schema';
import { RoleUpsertWithWhereUniqueWithoutEmojiInputObjectSchema } from './RoleUpsertWithWhereUniqueWithoutEmojiInput.schema';
import { RoleCreateManyEmojiInputEnvelopeObjectSchema } from './RoleCreateManyEmojiInputEnvelope.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithWhereUniqueWithoutEmojiInputObjectSchema } from './RoleUpdateWithWhereUniqueWithoutEmojiInput.schema';
import { RoleUpdateManyWithWhereWithoutEmojiInputObjectSchema } from './RoleUpdateManyWithWhereWithoutEmojiInput.schema';
import { RoleScalarWhereInputObjectSchema } from './RoleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutEmojiNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleCreateWithoutEmojiInputObjectSchema),
          z.lazy(() => RoleCreateWithoutEmojiInputObjectSchema).array(),
          z.lazy(() => RoleUncheckedCreateWithoutEmojiInputObjectSchema),
          z
            .lazy(() => RoleUncheckedCreateWithoutEmojiInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RoleCreateOrConnectWithoutEmojiInputObjectSchema),
          z
            .lazy(() => RoleCreateOrConnectWithoutEmojiInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => RoleUpsertWithWhereUniqueWithoutEmojiInputObjectSchema),
          z
            .lazy(() => RoleUpsertWithWhereUniqueWithoutEmojiInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RoleCreateManyEmojiInputEnvelopeObjectSchema)
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
          z.lazy(() => RoleUpdateWithWhereUniqueWithoutEmojiInputObjectSchema),
          z
            .lazy(() => RoleUpdateWithWhereUniqueWithoutEmojiInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => RoleUpdateManyWithWhereWithoutEmojiInputObjectSchema),
          z
            .lazy(() => RoleUpdateManyWithWhereWithoutEmojiInputObjectSchema)
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

export const RoleUncheckedUpdateManyWithoutEmojiNestedInputObjectSchema =
  Schema;
