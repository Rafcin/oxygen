import { z } from 'zod'
import { DiscordEventWhereUniqueInputObjectSchema } from './DiscordEventWhereUniqueInput.schema'
import { DiscordEventUpdateWithoutScheduleInputObjectSchema } from './DiscordEventUpdateWithoutScheduleInput.schema'
import { DiscordEventUncheckedUpdateWithoutScheduleInputObjectSchema } from './DiscordEventUncheckedUpdateWithoutScheduleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventUpdateWithWhereUniqueWithoutScheduleInput> =
  z
    .object({
      where: z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DiscordEventUpdateWithoutScheduleInputObjectSchema),
        z.lazy(() => DiscordEventUncheckedUpdateWithoutScheduleInputObjectSchema),
      ]),
    })
    .strict()

export const DiscordEventUpdateWithWhereUniqueWithoutScheduleInputObjectSchema =
  Schema
