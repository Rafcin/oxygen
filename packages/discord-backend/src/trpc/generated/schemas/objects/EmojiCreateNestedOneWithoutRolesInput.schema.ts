import { z } from 'zod';
import { EmojiCreateWithoutRolesInputObjectSchema } from './EmojiCreateWithoutRolesInput.schema';
import { EmojiUncheckedCreateWithoutRolesInputObjectSchema } from './EmojiUncheckedCreateWithoutRolesInput.schema';
import { EmojiCreateOrConnectWithoutRolesInputObjectSchema } from './EmojiCreateOrConnectWithoutRolesInput.schema';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiCreateNestedOneWithoutRolesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EmojiCreateWithoutRolesInputObjectSchema),
        z.lazy(() => EmojiUncheckedCreateWithoutRolesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => EmojiCreateOrConnectWithoutRolesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => EmojiWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const EmojiCreateNestedOneWithoutRolesInputObjectSchema = Schema;
