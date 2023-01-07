import { z } from 'zod';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';
import { EmojiCreateWithoutGuildInputObjectSchema } from './EmojiCreateWithoutGuildInput.schema';
import { EmojiUncheckedCreateWithoutGuildInputObjectSchema } from './EmojiUncheckedCreateWithoutGuildInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiCreateOrConnectWithoutGuildInput> = z
  .object({
    where: z.lazy(() => EmojiWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EmojiCreateWithoutGuildInputObjectSchema),
      z.lazy(() => EmojiUncheckedCreateWithoutGuildInputObjectSchema),
    ]),
  })
  .strict();

export const EmojiCreateOrConnectWithoutGuildInputObjectSchema = Schema;
