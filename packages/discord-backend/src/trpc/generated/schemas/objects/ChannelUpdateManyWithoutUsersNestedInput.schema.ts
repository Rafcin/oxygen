import { z } from 'zod';
import { ChannelCreateWithoutUsersInputObjectSchema } from './ChannelCreateWithoutUsersInput.schema';
import { ChannelUncheckedCreateWithoutUsersInputObjectSchema } from './ChannelUncheckedCreateWithoutUsersInput.schema';
import { ChannelCreateOrConnectWithoutUsersInputObjectSchema } from './ChannelCreateOrConnectWithoutUsersInput.schema';
import { ChannelUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './ChannelUpsertWithWhereUniqueWithoutUsersInput.schema';
import { ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './ChannelUpdateWithWhereUniqueWithoutUsersInput.schema';
import { ChannelUpdateManyWithWhereWithoutUsersInputObjectSchema } from './ChannelUpdateManyWithWhereWithoutUsersInput.schema';
import { ChannelScalarWhereInputObjectSchema } from './ChannelScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelUpdateManyWithoutUsersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ChannelCreateWithoutUsersInputObjectSchema),
        z.lazy(() => ChannelCreateWithoutUsersInputObjectSchema).array(),
        z.lazy(() => ChannelUncheckedCreateWithoutUsersInputObjectSchema),
        z
          .lazy(() => ChannelUncheckedCreateWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ChannelCreateOrConnectWithoutUsersInputObjectSchema),
        z
          .lazy(() => ChannelCreateOrConnectWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ChannelUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => ChannelUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ChannelWhereUniqueInputObjectSchema),
        z.lazy(() => ChannelWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ChannelWhereUniqueInputObjectSchema),
        z.lazy(() => ChannelWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ChannelWhereUniqueInputObjectSchema),
        z.lazy(() => ChannelWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ChannelWhereUniqueInputObjectSchema),
        z.lazy(() => ChannelWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ChannelUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => ChannelUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ChannelUpdateManyWithWhereWithoutUsersInputObjectSchema),
        z
          .lazy(() => ChannelUpdateManyWithWhereWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ChannelScalarWhereInputObjectSchema),
        z.lazy(() => ChannelScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ChannelUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
