import { z } from 'zod';
import { ReactionWhereUniqueInputObjectSchema } from './ReactionWhereUniqueInput.schema';
import { ReactionUpdateWithoutMessagesInputObjectSchema } from './ReactionUpdateWithoutMessagesInput.schema';
import { ReactionUncheckedUpdateWithoutMessagesInputObjectSchema } from './ReactionUncheckedUpdateWithoutMessagesInput.schema';
import { ReactionCreateWithoutMessagesInputObjectSchema } from './ReactionCreateWithoutMessagesInput.schema';
import { ReactionUncheckedCreateWithoutMessagesInputObjectSchema } from './ReactionUncheckedCreateWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionUpsertWithWhereUniqueWithoutMessagesInput> =
  z
    .object({
      where: z.lazy(() => ReactionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ReactionUpdateWithoutMessagesInputObjectSchema),
        z.lazy(() => ReactionUncheckedUpdateWithoutMessagesInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ReactionCreateWithoutMessagesInputObjectSchema),
        z.lazy(() => ReactionUncheckedCreateWithoutMessagesInputObjectSchema),
      ]),
    })
    .strict();

export const ReactionUpsertWithWhereUniqueWithoutMessagesInputObjectSchema =
  Schema;
