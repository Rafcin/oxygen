import { z } from 'zod';
import { ReactionWhereUniqueInputObjectSchema } from './ReactionWhereUniqueInput.schema';
import { ReactionUpdateWithoutMessagesInputObjectSchema } from './ReactionUpdateWithoutMessagesInput.schema';
import { ReactionUncheckedUpdateWithoutMessagesInputObjectSchema } from './ReactionUncheckedUpdateWithoutMessagesInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ReactionUpdateWithWhereUniqueWithoutMessagesInput> =
  z
    .object({
      where: z.lazy(() => ReactionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ReactionUpdateWithoutMessagesInputObjectSchema),
        z.lazy(() => ReactionUncheckedUpdateWithoutMessagesInputObjectSchema),
      ]),
    })
    .strict();

export const ReactionUpdateWithWhereUniqueWithoutMessagesInputObjectSchema =
  Schema;
