import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutEmojiInputObjectSchema } from './RoleUpdateWithoutEmojiInput.schema';
import { RoleUncheckedUpdateWithoutEmojiInputObjectSchema } from './RoleUncheckedUpdateWithoutEmojiInput.schema';
import { RoleCreateWithoutEmojiInputObjectSchema } from './RoleCreateWithoutEmojiInput.schema';
import { RoleUncheckedCreateWithoutEmojiInputObjectSchema } from './RoleUncheckedCreateWithoutEmojiInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutEmojiInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => RoleUpdateWithoutEmojiInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutEmojiInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RoleCreateWithoutEmojiInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutEmojiInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpsertWithWhereUniqueWithoutEmojiInputObjectSchema = Schema;
