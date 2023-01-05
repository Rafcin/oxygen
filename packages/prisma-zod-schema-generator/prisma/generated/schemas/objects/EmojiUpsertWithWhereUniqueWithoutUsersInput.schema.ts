import { z } from 'zod';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';
import { EmojiUpdateWithoutUsersInputObjectSchema } from './EmojiUpdateWithoutUsersInput.schema';
import { EmojiUncheckedUpdateWithoutUsersInputObjectSchema } from './EmojiUncheckedUpdateWithoutUsersInput.schema';
import { EmojiCreateWithoutUsersInputObjectSchema } from './EmojiCreateWithoutUsersInput.schema';
import { EmojiUncheckedCreateWithoutUsersInputObjectSchema } from './EmojiUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiUpsertWithWhereUniqueWithoutUsersInput> = z
  .object({
    where: z.lazy(() => EmojiWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => EmojiUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => EmojiUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EmojiCreateWithoutUsersInputObjectSchema),
      z.lazy(() => EmojiUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const EmojiUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
