import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleCreateWithoutEmojiInputObjectSchema } from './RoleCreateWithoutEmojiInput.schema';
import { RoleUncheckedCreateWithoutEmojiInputObjectSchema } from './RoleUncheckedCreateWithoutEmojiInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateOrConnectWithoutEmojiInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoleCreateWithoutEmojiInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutEmojiInputObjectSchema),
    ]),
  })
  .strict();

export const RoleCreateOrConnectWithoutEmojiInputObjectSchema = Schema;
