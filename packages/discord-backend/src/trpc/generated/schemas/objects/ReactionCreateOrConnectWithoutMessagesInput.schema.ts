import { z } from 'zod';
import { ReactionWhereUniqueInputObjectSchema } from './ReactionWhereUniqueInput.schema';
import { ReactionCreateWithoutMessagesInputObjectSchema } from './ReactionCreateWithoutMessagesInput.schema';
import { ReactionUncheckedCreateWithoutMessagesInputObjectSchema } from './ReactionUncheckedCreateWithoutMessagesInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ReactionCreateOrConnectWithoutMessagesInput> = z
  .object({
    where: z.lazy(() => ReactionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReactionCreateWithoutMessagesInputObjectSchema),
      z.lazy(() => ReactionUncheckedCreateWithoutMessagesInputObjectSchema),
    ]),
  })
  .strict();

export const ReactionCreateOrConnectWithoutMessagesInputObjectSchema = Schema;
