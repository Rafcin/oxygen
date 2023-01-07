import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutMention_rolesInputObjectSchema } from './MessageCreateWithoutMention_rolesInput.schema';
import { MessageUncheckedCreateWithoutMention_rolesInputObjectSchema } from './MessageUncheckedCreateWithoutMention_rolesInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateOrConnectWithoutMention_rolesInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MessageCreateWithoutMention_rolesInputObjectSchema),
        z.lazy(
          () => MessageUncheckedCreateWithoutMention_rolesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MessageCreateOrConnectWithoutMention_rolesInputObjectSchema =
  Schema;
