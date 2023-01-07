import { z } from 'zod';
import { EmojiUpdateWithoutRolesInputObjectSchema } from './EmojiUpdateWithoutRolesInput.schema';
import { EmojiUncheckedUpdateWithoutRolesInputObjectSchema } from './EmojiUncheckedUpdateWithoutRolesInput.schema';
import { EmojiCreateWithoutRolesInputObjectSchema } from './EmojiCreateWithoutRolesInput.schema';
import { EmojiUncheckedCreateWithoutRolesInputObjectSchema } from './EmojiUncheckedCreateWithoutRolesInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiUpsertWithoutRolesInput> = z
  .object({
    update: z.union([
      z.lazy(() => EmojiUpdateWithoutRolesInputObjectSchema),
      z.lazy(() => EmojiUncheckedUpdateWithoutRolesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EmojiCreateWithoutRolesInputObjectSchema),
      z.lazy(() => EmojiUncheckedCreateWithoutRolesInputObjectSchema),
    ]),
  })
  .strict();

export const EmojiUpsertWithoutRolesInputObjectSchema = Schema;
