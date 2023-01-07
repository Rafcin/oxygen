import { z } from 'zod';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';
import { EmojiUpdateWithoutUsersInputObjectSchema } from './EmojiUpdateWithoutUsersInput.schema';
import { EmojiUncheckedUpdateWithoutUsersInputObjectSchema } from './EmojiUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiUpdateWithWhereUniqueWithoutUsersInput> = z
  .object({
    where: z.lazy(() => EmojiWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => EmojiUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => EmojiUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const EmojiUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
