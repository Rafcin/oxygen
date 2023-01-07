import { z } from 'zod';
import { ReactionWhereUniqueInputObjectSchema } from './ReactionWhereUniqueInput.schema';
import { ReactionCreateWithoutEmojisInputObjectSchema } from './ReactionCreateWithoutEmojisInput.schema';
import { ReactionUncheckedCreateWithoutEmojisInputObjectSchema } from './ReactionUncheckedCreateWithoutEmojisInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ReactionCreateOrConnectWithoutEmojisInput> = z
  .object({
    where: z.lazy(() => ReactionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReactionCreateWithoutEmojisInputObjectSchema),
      z.lazy(() => ReactionUncheckedCreateWithoutEmojisInputObjectSchema),
    ]),
  })
  .strict();

export const ReactionCreateOrConnectWithoutEmojisInputObjectSchema = Schema;
