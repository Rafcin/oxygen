import { z } from 'zod';
import { ReactionCreateWithoutEmojisInputObjectSchema } from './ReactionCreateWithoutEmojisInput.schema';
import { ReactionUncheckedCreateWithoutEmojisInputObjectSchema } from './ReactionUncheckedCreateWithoutEmojisInput.schema';
import { ReactionCreateOrConnectWithoutEmojisInputObjectSchema } from './ReactionCreateOrConnectWithoutEmojisInput.schema';
import { ReactionWhereUniqueInputObjectSchema } from './ReactionWhereUniqueInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ReactionCreateNestedManyWithoutEmojisInput> = z
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
    connect: z
      .union([
        z.lazy(() => ReactionWhereUniqueInputObjectSchema),
        z.lazy(() => ReactionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ReactionCreateNestedManyWithoutEmojisInputObjectSchema = Schema;
