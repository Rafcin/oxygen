import { z } from 'zod';
import { EmojiCreateWithoutUsersInputObjectSchema } from './EmojiCreateWithoutUsersInput.schema';
import { EmojiUncheckedCreateWithoutUsersInputObjectSchema } from './EmojiUncheckedCreateWithoutUsersInput.schema';
import { EmojiCreateOrConnectWithoutUsersInputObjectSchema } from './EmojiCreateOrConnectWithoutUsersInput.schema';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiCreateNestedManyWithoutUsersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EmojiCreateWithoutUsersInputObjectSchema),
        z.lazy(() => EmojiCreateWithoutUsersInputObjectSchema).array(),
        z.lazy(() => EmojiUncheckedCreateWithoutUsersInputObjectSchema),
        z.lazy(() => EmojiUncheckedCreateWithoutUsersInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => EmojiCreateOrConnectWithoutUsersInputObjectSchema),
        z.lazy(() => EmojiCreateOrConnectWithoutUsersInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => EmojiWhereUniqueInputObjectSchema),
        z.lazy(() => EmojiWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const EmojiCreateNestedManyWithoutUsersInputObjectSchema = Schema;
