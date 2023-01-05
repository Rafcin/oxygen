import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutEmojiInputObjectSchema } from './RoleUpdateWithoutEmojiInput.schema';
import { RoleUncheckedUpdateWithoutEmojiInputObjectSchema } from './RoleUncheckedUpdateWithoutEmojiInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutEmojiInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => RoleUpdateWithoutEmojiInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutEmojiInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpdateWithWhereUniqueWithoutEmojiInputObjectSchema = Schema;
