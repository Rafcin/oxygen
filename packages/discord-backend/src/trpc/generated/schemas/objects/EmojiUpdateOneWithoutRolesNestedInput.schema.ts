import { z } from 'zod';
import { EmojiCreateWithoutRolesInputObjectSchema } from './EmojiCreateWithoutRolesInput.schema';
import { EmojiUncheckedCreateWithoutRolesInputObjectSchema } from './EmojiUncheckedCreateWithoutRolesInput.schema';
import { EmojiCreateOrConnectWithoutRolesInputObjectSchema } from './EmojiCreateOrConnectWithoutRolesInput.schema';
import { EmojiUpsertWithoutRolesInputObjectSchema } from './EmojiUpsertWithoutRolesInput.schema';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';
import { EmojiUpdateWithoutRolesInputObjectSchema } from './EmojiUpdateWithoutRolesInput.schema';
import { EmojiUncheckedUpdateWithoutRolesInputObjectSchema } from './EmojiUncheckedUpdateWithoutRolesInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiUpdateOneWithoutRolesNestedInput> = z
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
    upsert: z.lazy(() => EmojiUpsertWithoutRolesInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => EmojiWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => EmojiUpdateWithoutRolesInputObjectSchema),
        z.lazy(() => EmojiUncheckedUpdateWithoutRolesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EmojiUpdateOneWithoutRolesNestedInputObjectSchema = Schema;
