import { z } from 'zod';
import { ReactionCreateWithoutEmojisInputObjectSchema } from './ReactionCreateWithoutEmojisInput.schema';
import { ReactionUncheckedCreateWithoutEmojisInputObjectSchema } from './ReactionUncheckedCreateWithoutEmojisInput.schema';
import { ReactionCreateOrConnectWithoutEmojisInputObjectSchema } from './ReactionCreateOrConnectWithoutEmojisInput.schema';
import { ReactionUpsertWithWhereUniqueWithoutEmojisInputObjectSchema } from './ReactionUpsertWithWhereUniqueWithoutEmojisInput.schema';
import { ReactionWhereUniqueInputObjectSchema } from './ReactionWhereUniqueInput.schema';
import { ReactionUpdateWithWhereUniqueWithoutEmojisInputObjectSchema } from './ReactionUpdateWithWhereUniqueWithoutEmojisInput.schema';
import { ReactionUpdateManyWithWhereWithoutEmojisInputObjectSchema } from './ReactionUpdateManyWithWhereWithoutEmojisInput.schema';
import { ReactionScalarWhereInputObjectSchema } from './ReactionScalarWhereInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ReactionUpdateManyWithoutEmojisNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ReactionCreateWithoutEmojisInputObjectSchema),
        z.lazy(() => ReactionCreateWithoutEmojisInputObjectSchema).array(),
        z.lazy(() => ReactionUncheckedCreateWithoutEmojisInputObjectSchema),
        z
          .lazy(() => ReactionUncheckedCreateWithoutEmojisInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ReactionCreateOrConnectWithoutEmojisInputObjectSchema),
        z
          .lazy(() => ReactionCreateOrConnectWithoutEmojisInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ReactionUpsertWithWhereUniqueWithoutEmojisInputObjectSchema,
        ),
        z
          .lazy(
            () => ReactionUpsertWithWhereUniqueWithoutEmojisInputObjectSchema,
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
          () => ReactionUpdateWithWhereUniqueWithoutEmojisInputObjectSchema,
        ),
        z
          .lazy(
            () => ReactionUpdateWithWhereUniqueWithoutEmojisInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ReactionUpdateManyWithWhereWithoutEmojisInputObjectSchema),
        z
          .lazy(() => ReactionUpdateManyWithWhereWithoutEmojisInputObjectSchema)
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

export const ReactionUpdateManyWithoutEmojisNestedInputObjectSchema = Schema;
