import { z } from 'zod';
import { ReactionWhereUniqueInputObjectSchema } from './ReactionWhereUniqueInput.schema';
import { ReactionUpdateWithoutEmojisInputObjectSchema } from './ReactionUpdateWithoutEmojisInput.schema';
import { ReactionUncheckedUpdateWithoutEmojisInputObjectSchema } from './ReactionUncheckedUpdateWithoutEmojisInput.schema';
import { ReactionCreateWithoutEmojisInputObjectSchema } from './ReactionCreateWithoutEmojisInput.schema';
import { ReactionUncheckedCreateWithoutEmojisInputObjectSchema } from './ReactionUncheckedCreateWithoutEmojisInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ReactionUpsertWithWhereUniqueWithoutEmojisInput> =
  z
    .object({
      where: z.lazy(() => ReactionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ReactionUpdateWithoutEmojisInputObjectSchema),
        z.lazy(() => ReactionUncheckedUpdateWithoutEmojisInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ReactionCreateWithoutEmojisInputObjectSchema),
        z.lazy(() => ReactionUncheckedCreateWithoutEmojisInputObjectSchema),
      ]),
    })
    .strict();

export const ReactionUpsertWithWhereUniqueWithoutEmojisInputObjectSchema =
  Schema;
