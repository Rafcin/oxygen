import { z } from 'zod';
import { EmojiScalarWhereInputObjectSchema } from './EmojiScalarWhereInput.schema';
import { EmojiUpdateManyMutationInputObjectSchema } from './EmojiUpdateManyMutationInput.schema';
import { EmojiUncheckedUpdateManyWithoutEmojisInputObjectSchema } from './EmojiUncheckedUpdateManyWithoutEmojisInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiUpdateManyWithWhereWithoutUsersInput> = z
  .object({
    where: z.lazy(() => EmojiScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => EmojiUpdateManyMutationInputObjectSchema),
      z.lazy(() => EmojiUncheckedUpdateManyWithoutEmojisInputObjectSchema),
    ]),
  })
  .strict();

export const EmojiUpdateManyWithWhereWithoutUsersInputObjectSchema = Schema;
