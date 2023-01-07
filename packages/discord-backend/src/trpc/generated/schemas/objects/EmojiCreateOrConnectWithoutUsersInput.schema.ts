import { z } from 'zod';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';
import { EmojiCreateWithoutUsersInputObjectSchema } from './EmojiCreateWithoutUsersInput.schema';
import { EmojiUncheckedCreateWithoutUsersInputObjectSchema } from './EmojiUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => EmojiWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EmojiCreateWithoutUsersInputObjectSchema),
      z.lazy(() => EmojiUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const EmojiCreateOrConnectWithoutUsersInputObjectSchema = Schema;
