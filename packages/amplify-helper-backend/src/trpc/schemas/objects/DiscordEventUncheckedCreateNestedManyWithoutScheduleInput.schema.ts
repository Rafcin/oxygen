import { z } from 'zod'
import { DiscordEventCreateWithoutScheduleInputObjectSchema } from './DiscordEventCreateWithoutScheduleInput.schema'
import { DiscordEventUncheckedCreateWithoutScheduleInputObjectSchema } from './DiscordEventUncheckedCreateWithoutScheduleInput.schema'
import { DiscordEventCreateOrConnectWithoutScheduleInputObjectSchema } from './DiscordEventCreateOrConnectWithoutScheduleInput.schema'
import { DiscordEventCreateManyScheduleInputEnvelopeObjectSchema } from './DiscordEventCreateManyScheduleInputEnvelope.schema'
import { DiscordEventWhereUniqueInputObjectSchema } from './DiscordEventWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventUncheckedCreateNestedManyWithoutScheduleInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordEventCreateWithoutScheduleInputObjectSchema),
          z.lazy(() => DiscordEventCreateWithoutScheduleInputObjectSchema).array(),
          z.lazy(() => DiscordEventUncheckedCreateWithoutScheduleInputObjectSchema),
          z
            .lazy(() => DiscordEventUncheckedCreateWithoutScheduleInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DiscordEventCreateOrConnectWithoutScheduleInputObjectSchema),
          z
            .lazy(() => DiscordEventCreateOrConnectWithoutScheduleInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiscordEventCreateManyScheduleInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
          z.lazy(() => DiscordEventWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const DiscordEventUncheckedCreateNestedManyWithoutScheduleInputObjectSchema =
  Schema
