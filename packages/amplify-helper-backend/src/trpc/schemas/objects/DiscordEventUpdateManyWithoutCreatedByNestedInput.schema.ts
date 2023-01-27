import { z } from 'zod'
import { DiscordEventCreateWithoutCreatedByInputObjectSchema } from './DiscordEventCreateWithoutCreatedByInput.schema'
import { DiscordEventUncheckedCreateWithoutCreatedByInputObjectSchema } from './DiscordEventUncheckedCreateWithoutCreatedByInput.schema'
import { DiscordEventCreateOrConnectWithoutCreatedByInputObjectSchema } from './DiscordEventCreateOrConnectWithoutCreatedByInput.schema'
import { DiscordEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './DiscordEventUpsertWithWhereUniqueWithoutCreatedByInput.schema'
import { DiscordEventCreateManyCreatedByInputEnvelopeObjectSchema } from './DiscordEventCreateManyCreatedByInputEnvelope.schema'
import { DiscordEventWhereUniqueInputObjectSchema } from './DiscordEventWhereUniqueInput.schema'
import { DiscordEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './DiscordEventUpdateWithWhereUniqueWithoutCreatedByInput.schema'
import { DiscordEventUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './DiscordEventUpdateManyWithWhereWithoutCreatedByInput.schema'
import { DiscordEventScalarWhereInputObjectSchema } from './DiscordEventScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventUpdateManyWithoutCreatedByNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DiscordEventCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => DiscordEventCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => DiscordEventUncheckedCreateWithoutCreatedByInputObjectSchema),
        z
          .lazy(() => DiscordEventUncheckedCreateWithoutCreatedByInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DiscordEventCreateOrConnectWithoutCreatedByInputObjectSchema),
        z
          .lazy(() => DiscordEventCreateOrConnectWithoutCreatedByInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => DiscordEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema
        ),
        z
          .lazy(
            () => DiscordEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => DiscordEventCreateManyCreatedByInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => DiscordEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema
        ),
        z
          .lazy(
            () => DiscordEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => DiscordEventUpdateManyWithWhereWithoutCreatedByInputObjectSchema
        ),
        z
          .lazy(
            () => DiscordEventUpdateManyWithWhereWithoutCreatedByInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => DiscordEventScalarWhereInputObjectSchema),
        z.lazy(() => DiscordEventScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const DiscordEventUpdateManyWithoutCreatedByNestedInputObjectSchema = Schema
