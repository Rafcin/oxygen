import { z } from 'zod'
import { GuildCreateWithoutEventScheduleInputObjectSchema } from './GuildCreateWithoutEventScheduleInput.schema'
import { GuildUncheckedCreateWithoutEventScheduleInputObjectSchema } from './GuildUncheckedCreateWithoutEventScheduleInput.schema'
import { GuildCreateOrConnectWithoutEventScheduleInputObjectSchema } from './GuildCreateOrConnectWithoutEventScheduleInput.schema'
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildCreateNestedOneWithoutEventScheduleInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => GuildCreateWithoutEventScheduleInputObjectSchema),
        z.lazy(() => GuildUncheckedCreateWithoutEventScheduleInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => GuildCreateOrConnectWithoutEventScheduleInputObjectSchema)
      .optional(),
    connect: z.lazy(() => GuildWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const GuildCreateNestedOneWithoutEventScheduleInputObjectSchema = Schema
