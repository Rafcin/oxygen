import { z } from 'zod';
import { EmojiCreateWithoutGuildInputObjectSchema } from './EmojiCreateWithoutGuildInput.schema';
import { EmojiUncheckedCreateWithoutGuildInputObjectSchema } from './EmojiUncheckedCreateWithoutGuildInput.schema';
import { EmojiCreateOrConnectWithoutGuildInputObjectSchema } from './EmojiCreateOrConnectWithoutGuildInput.schema';
import { EmojiUpsertWithWhereUniqueWithoutGuildInputObjectSchema } from './EmojiUpsertWithWhereUniqueWithoutGuildInput.schema';
import { EmojiCreateManyGuildInputEnvelopeObjectSchema } from './EmojiCreateManyGuildInputEnvelope.schema';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';
import { EmojiUpdateWithWhereUniqueWithoutGuildInputObjectSchema } from './EmojiUpdateWithWhereUniqueWithoutGuildInput.schema';
import { EmojiUpdateManyWithWhereWithoutGuildInputObjectSchema } from './EmojiUpdateManyWithWhereWithoutGuildInput.schema';
import { EmojiScalarWhereInputObjectSchema } from './EmojiScalarWhereInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiUncheckedUpdateManyWithoutGuildNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EmojiCreateWithoutGuildInputObjectSchema),
          z.lazy(() => EmojiCreateWithoutGuildInputObjectSchema).array(),
          z.lazy(() => EmojiUncheckedCreateWithoutGuildInputObjectSchema),
          z
            .lazy(() => EmojiUncheckedCreateWithoutGuildInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => EmojiCreateOrConnectWithoutGuildInputObjectSchema),
          z
            .lazy(() => EmojiCreateOrConnectWithoutGuildInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => EmojiUpsertWithWhereUniqueWithoutGuildInputObjectSchema),
          z
            .lazy(() => EmojiUpsertWithWhereUniqueWithoutGuildInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => EmojiCreateManyGuildInputEnvelopeObjectSchema)
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
          z.lazy(() => EmojiUpdateWithWhereUniqueWithoutGuildInputObjectSchema),
          z
            .lazy(() => EmojiUpdateWithWhereUniqueWithoutGuildInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => EmojiUpdateManyWithWhereWithoutGuildInputObjectSchema),
          z
            .lazy(() => EmojiUpdateManyWithWhereWithoutGuildInputObjectSchema)
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

export const EmojiUncheckedUpdateManyWithoutGuildNestedInputObjectSchema =
  Schema;
