import { z } from 'zod';
import { ReactionCreateWithoutMessagesInputObjectSchema } from './ReactionCreateWithoutMessagesInput.schema';
import { ReactionUncheckedCreateWithoutMessagesInputObjectSchema } from './ReactionUncheckedCreateWithoutMessagesInput.schema';
import { ReactionCreateOrConnectWithoutMessagesInputObjectSchema } from './ReactionCreateOrConnectWithoutMessagesInput.schema';
import { ReactionUpsertWithWhereUniqueWithoutMessagesInputObjectSchema } from './ReactionUpsertWithWhereUniqueWithoutMessagesInput.schema';
import { ReactionWhereUniqueInputObjectSchema } from './ReactionWhereUniqueInput.schema';
import { ReactionUpdateWithWhereUniqueWithoutMessagesInputObjectSchema } from './ReactionUpdateWithWhereUniqueWithoutMessagesInput.schema';
import { ReactionUpdateManyWithWhereWithoutMessagesInputObjectSchema } from './ReactionUpdateManyWithWhereWithoutMessagesInput.schema';
import { ReactionScalarWhereInputObjectSchema } from './ReactionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionUncheckedUpdateManyWithoutMessagesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReactionCreateWithoutMessagesInputObjectSchema),
          z.lazy(() => ReactionCreateWithoutMessagesInputObjectSchema).array(),
          z.lazy(() => ReactionUncheckedCreateWithoutMessagesInputObjectSchema),
          z
            .lazy(() => ReactionUncheckedCreateWithoutMessagesInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ReactionCreateOrConnectWithoutMessagesInputObjectSchema),
          z
            .lazy(() => ReactionCreateOrConnectWithoutMessagesInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ReactionUpsertWithWhereUniqueWithoutMessagesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReactionUpsertWithWhereUniqueWithoutMessagesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ReactionWhereUniqueInputObjectSchema),
          z.lazy(() => ReactionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ReactionWhereUniqueInputObjectSchema),
          z.lazy(() => ReactionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ReactionWhereUniqueInputObjectSchema),
          z.lazy(() => ReactionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ReactionWhereUniqueInputObjectSchema),
          z.lazy(() => ReactionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ReactionUpdateWithWhereUniqueWithoutMessagesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReactionUpdateWithWhereUniqueWithoutMessagesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ReactionUpdateManyWithWhereWithoutMessagesInputObjectSchema,
          ),
          z
            .lazy(
              () => ReactionUpdateManyWithWhereWithoutMessagesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ReactionScalarWhereInputObjectSchema),
          z.lazy(() => ReactionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ReactionUncheckedUpdateManyWithoutMessagesNestedInputObjectSchema =
  Schema;
