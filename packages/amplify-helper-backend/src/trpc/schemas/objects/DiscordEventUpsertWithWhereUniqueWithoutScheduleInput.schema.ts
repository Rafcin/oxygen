import { z } from 'zod'
import { DiscordEventWhereUniqueInputObjectSchema } from './DiscordEventWhereUniqueInput.schema'
import { DiscordEventUpdateWithoutScheduleInputObjectSchema } from './DiscordEventUpdateWithoutScheduleInput.schema'
import { DiscordEventUncheckedUpdateWithoutScheduleInputObjectSchema } from './DiscordEventUncheckedUpdateWithoutScheduleInput.schema'
import { DiscordEventCreateWithoutScheduleInputObjectSchema } from './DiscordEventCreateWithoutScheduleInput.schema'
import { DiscordEventUncheckedCreateWithoutScheduleInputObjectSchema } from './DiscordEventUncheckedCreateWithoutScheduleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventUpsertWithWhereUniqueWithoutScheduleInput> =
  z
    .object({
      where: z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DiscordEventUpdateWithoutScheduleInputObjectSchema),
        z.lazy(() => DiscordEventUncheckedUpdateWithoutScheduleInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => DiscordEventCreateWithoutScheduleInputObjectSchema),
        z.lazy(() => DiscordEventUncheckedCreateWithoutScheduleInputObjectSchema),
      ]),
    })
    .strict()

export const DiscordEventUpsertWithWhereUniqueWithoutScheduleInputObjectSchema =
  Schema
