import { z } from 'zod'
import { DiscordEventCreateWithoutCreatedByInputObjectSchema } from './DiscordEventCreateWithoutCreatedByInput.schema'
import { DiscordEventUncheckedCreateWithoutCreatedByInputObjectSchema } from './DiscordEventUncheckedCreateWithoutCreatedByInput.schema'
import { DiscordEventCreateOrConnectWithoutCreatedByInputObjectSchema } from './DiscordEventCreateOrConnectWithoutCreatedByInput.schema'
import { DiscordEventCreateManyCreatedByInputEnvelopeObjectSchema } from './DiscordEventCreateManyCreatedByInputEnvelope.schema'
import { DiscordEventWhereUniqueInputObjectSchema } from './DiscordEventWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventCreateNestedManyWithoutCreatedByInput> = z
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
    createMany: z
      .lazy(() => DiscordEventCreateManyCreatedByInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const DiscordEventCreateNestedManyWithoutCreatedByInputObjectSchema = Schema
