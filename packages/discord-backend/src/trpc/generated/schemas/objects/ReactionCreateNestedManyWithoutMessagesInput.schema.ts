import { z } from 'zod';
import { ReactionCreateWithoutMessagesInputObjectSchema } from './ReactionCreateWithoutMessagesInput.schema';
import { ReactionUncheckedCreateWithoutMessagesInputObjectSchema } from './ReactionUncheckedCreateWithoutMessagesInput.schema';
import { ReactionCreateOrConnectWithoutMessagesInputObjectSchema } from './ReactionCreateOrConnectWithoutMessagesInput.schema';
import { ReactionWhereUniqueInputObjectSchema } from './ReactionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionCreateNestedManyWithoutMessagesInput> = z
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
    connect: z
      .union([
        z.lazy(() => ReactionWhereUniqueInputObjectSchema),
        z.lazy(() => ReactionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ReactionCreateNestedManyWithoutMessagesInputObjectSchema = Schema;
