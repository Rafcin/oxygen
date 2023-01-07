import { z } from 'zod';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';
import { EmojiCreateWithoutRolesInputObjectSchema } from './EmojiCreateWithoutRolesInput.schema';
import { EmojiUncheckedCreateWithoutRolesInputObjectSchema } from './EmojiUncheckedCreateWithoutRolesInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiCreateOrConnectWithoutRolesInput> = z
  .object({
    where: z.lazy(() => EmojiWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EmojiCreateWithoutRolesInputObjectSchema),
      z.lazy(() => EmojiUncheckedCreateWithoutRolesInputObjectSchema),
    ]),
  })
  .strict();

export const EmojiCreateOrConnectWithoutRolesInputObjectSchema = Schema;
