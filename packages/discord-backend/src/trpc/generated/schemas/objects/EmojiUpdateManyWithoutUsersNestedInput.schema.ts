import { z } from 'zod';
import { EmojiCreateWithoutUsersInputObjectSchema } from './EmojiCreateWithoutUsersInput.schema';
import { EmojiUncheckedCreateWithoutUsersInputObjectSchema } from './EmojiUncheckedCreateWithoutUsersInput.schema';
import { EmojiCreateOrConnectWithoutUsersInputObjectSchema } from './EmojiCreateOrConnectWithoutUsersInput.schema';
import { EmojiUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './EmojiUpsertWithWhereUniqueWithoutUsersInput.schema';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';
import { EmojiUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './EmojiUpdateWithWhereUniqueWithoutUsersInput.schema';
import { EmojiUpdateManyWithWhereWithoutUsersInputObjectSchema } from './EmojiUpdateManyWithWhereWithoutUsersInput.schema';
import { EmojiScalarWhereInputObjectSchema } from './EmojiScalarWhereInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiUpdateManyWithoutUsersNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => EmojiUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => EmojiUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => EmojiWhereUniqueInputObjectSchema),
        z.lazy(() => EmojiWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => EmojiWhereUniqueInputObjectSchema),
        z.lazy(() => EmojiWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => EmojiWhereUniqueInputObjectSchema),
        z.lazy(() => EmojiWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => EmojiWhereUniqueInputObjectSchema),
        z.lazy(() => EmojiWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => EmojiUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => EmojiUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => EmojiUpdateManyWithWhereWithoutUsersInputObjectSchema),
        z
          .lazy(() => EmojiUpdateManyWithWhereWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => EmojiScalarWhereInputObjectSchema),
        z.lazy(() => EmojiScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const EmojiUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
