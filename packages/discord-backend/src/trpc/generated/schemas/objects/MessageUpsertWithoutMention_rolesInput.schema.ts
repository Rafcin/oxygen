import { z } from 'zod';
import { MessageUpdateWithoutMention_rolesInputObjectSchema } from './MessageUpdateWithoutMention_rolesInput.schema';
import { MessageUncheckedUpdateWithoutMention_rolesInputObjectSchema } from './MessageUncheckedUpdateWithoutMention_rolesInput.schema';
import { MessageCreateWithoutMention_rolesInputObjectSchema } from './MessageCreateWithoutMention_rolesInput.schema';
import { MessageUncheckedCreateWithoutMention_rolesInputObjectSchema } from './MessageUncheckedCreateWithoutMention_rolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpsertWithoutMention_rolesInput> = z
  .object({
    update: z.union([
      z.lazy(() => MessageUpdateWithoutMention_rolesInputObjectSchema),
      z.lazy(() => MessageUncheckedUpdateWithoutMention_rolesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MessageCreateWithoutMention_rolesInputObjectSchema),
      z.lazy(() => MessageUncheckedCreateWithoutMention_rolesInputObjectSchema),
    ]),
  })
  .strict();

export const MessageUpsertWithoutMention_rolesInputObjectSchema = Schema;
