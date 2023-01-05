import { z } from 'zod';
import { RoleCreateWithoutEmojiInputObjectSchema } from './RoleCreateWithoutEmojiInput.schema';
import { RoleUncheckedCreateWithoutEmojiInputObjectSchema } from './RoleUncheckedCreateWithoutEmojiInput.schema';
import { RoleCreateOrConnectWithoutEmojiInputObjectSchema } from './RoleCreateOrConnectWithoutEmojiInput.schema';
import { RoleCreateManyEmojiInputEnvelopeObjectSchema } from './RoleCreateManyEmojiInputEnvelope.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateNestedManyWithoutEmojiInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RoleCreateWithoutEmojiInputObjectSchema),
        z.lazy(() => RoleCreateWithoutEmojiInputObjectSchema).array(),
        z.lazy(() => RoleUncheckedCreateWithoutEmojiInputObjectSchema),
        z.lazy(() => RoleUncheckedCreateWithoutEmojiInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoleCreateOrConnectWithoutEmojiInputObjectSchema),
        z.lazy(() => RoleCreateOrConnectWithoutEmojiInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoleCreateManyEmojiInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoleWhereUniqueInputObjectSchema),
        z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const RoleCreateNestedManyWithoutEmojiInputObjectSchema = Schema;
