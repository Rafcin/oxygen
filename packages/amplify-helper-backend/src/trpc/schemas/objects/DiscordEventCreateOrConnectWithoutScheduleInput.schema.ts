import { z } from 'zod'
import { DiscordEventWhereUniqueInputObjectSchema } from './DiscordEventWhereUniqueInput.schema'
import { DiscordEventCreateWithoutScheduleInputObjectSchema } from './DiscordEventCreateWithoutScheduleInput.schema'
import { DiscordEventUncheckedCreateWithoutScheduleInputObjectSchema } from './DiscordEventUncheckedCreateWithoutScheduleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventCreateOrConnectWithoutScheduleInput> = z
  .object({
    where: z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiscordEventCreateWithoutScheduleInputObjectSchema),
      z.lazy(() => DiscordEventUncheckedCreateWithoutScheduleInputObjectSchema),
    ]),
  })
  .strict()

export const DiscordEventCreateOrConnectWithoutScheduleInputObjectSchema = Schema
