import { z } from 'zod';
import { MessageCreateWithoutMention_rolesInputObjectSchema } from './MessageCreateWithoutMention_rolesInput.schema';
import { MessageUncheckedCreateWithoutMention_rolesInputObjectSchema } from './MessageUncheckedCreateWithoutMention_rolesInput.schema';
import { MessageCreateOrConnectWithoutMention_rolesInputObjectSchema } from './MessageCreateOrConnectWithoutMention_rolesInput.schema';
import { MessageUpsertWithoutMention_rolesInputObjectSchema } from './MessageUpsertWithoutMention_rolesInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutMention_rolesInputObjectSchema } from './MessageUpdateWithoutMention_rolesInput.schema';
import { MessageUncheckedUpdateWithoutMention_rolesInputObjectSchema } from './MessageUncheckedUpdateWithoutMention_rolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateOneWithoutMention_rolesNestedInput> =
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
      upsert: z
        .lazy(() => MessageUpsertWithoutMention_rolesInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => MessageWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MessageUpdateWithoutMention_rolesInputObjectSchema),
          z.lazy(
            () => MessageUncheckedUpdateWithoutMention_rolesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MessageUpdateOneWithoutMention_rolesNestedInputObjectSchema =
  Schema;
