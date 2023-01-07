import { z } from 'zod';
import { ReactionWhereUniqueInputObjectSchema } from './ReactionWhereUniqueInput.schema';
import { ReactionUpdateWithoutEmojisInputObjectSchema } from './ReactionUpdateWithoutEmojisInput.schema';
import { ReactionUncheckedUpdateWithoutEmojisInputObjectSchema } from './ReactionUncheckedUpdateWithoutEmojisInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionUpdateWithWhereUniqueWithoutEmojisInput> =
  z
    .object({
      where: z.lazy(() => ReactionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ReactionUpdateWithoutEmojisInputObjectSchema),
        z.lazy(() => ReactionUncheckedUpdateWithoutEmojisInputObjectSchema),
      ]),
    })
    .strict();

export const ReactionUpdateWithWhereUniqueWithoutEmojisInputObjectSchema =
  Schema;
