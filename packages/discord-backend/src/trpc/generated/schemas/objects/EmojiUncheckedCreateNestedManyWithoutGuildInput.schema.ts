import { z } from 'zod';
import { EmojiCreateWithoutGuildInputObjectSchema } from './EmojiCreateWithoutGuildInput.schema';
import { EmojiUncheckedCreateWithoutGuildInputObjectSchema } from './EmojiUncheckedCreateWithoutGuildInput.schema';
import { EmojiCreateOrConnectWithoutGuildInputObjectSchema } from './EmojiCreateOrConnectWithoutGuildInput.schema';
import { EmojiCreateManyGuildInputEnvelopeObjectSchema } from './EmojiCreateManyGuildInputEnvelope.schema';
import { EmojiWhereUniqueInputObjectSchema } from './EmojiWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiUncheckedCreateNestedManyWithoutGuildInput> =
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
      createMany: z
        .lazy(() => EmojiCreateManyGuildInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => EmojiWhereUniqueInputObjectSchema),
          z.lazy(() => EmojiWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EmojiUncheckedCreateNestedManyWithoutGuildInputObjectSchema =
  Schema;
