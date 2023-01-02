import { z } from 'zod';
import { MessageCreateWithoutMention_rolesInputObjectSchema } from './MessageCreateWithoutMention_rolesInput.schema';
import { MessageUncheckedCreateWithoutMention_rolesInputObjectSchema } from './MessageUncheckedCreateWithoutMention_rolesInput.schema';
import { MessageCreateOrConnectWithoutMention_rolesInputObjectSchema } from './MessageCreateOrConnectWithoutMention_rolesInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateNestedOneWithoutMention_rolesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MessageCreateWithoutMention_rolesInputObjectSchema),
          z.lazy(
            () => MessageUncheckedCreateWithoutMention_rolesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MessageCreateOrConnectWithoutMention_rolesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MessageWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const MessageCreateNestedOneWithoutMention_rolesInputObjectSchema =
  Schema;
