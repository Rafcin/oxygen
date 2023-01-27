import { z } from 'zod'
import { GuildCreateWithoutEventScheduleInputObjectSchema } from './GuildCreateWithoutEventScheduleInput.schema'
import { GuildUncheckedCreateWithoutEventScheduleInputObjectSchema } from './GuildUncheckedCreateWithoutEventScheduleInput.schema'
import { GuildCreateOrConnectWithoutEventScheduleInputObjectSchema } from './GuildCreateOrConnectWithoutEventScheduleInput.schema'
import { GuildUpsertWithoutEventScheduleInputObjectSchema } from './GuildUpsertWithoutEventScheduleInput.schema'
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema'
import { GuildUpdateWithoutEventScheduleInputObjectSchema } from './GuildUpdateWithoutEventScheduleInput.schema'
import { GuildUncheckedUpdateWithoutEventScheduleInputObjectSchema } from './GuildUncheckedUpdateWithoutEventScheduleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildUpdateOneRequiredWithoutEventScheduleNestedInput> =
  z
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
      upsert: z
        .lazy(() => GuildUpsertWithoutEventScheduleInputObjectSchema)
        .optional(),
      connect: z.lazy(() => GuildWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => GuildUpdateWithoutEventScheduleInputObjectSchema),
          z.lazy(() => GuildUncheckedUpdateWithoutEventScheduleInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const GuildUpdateOneRequiredWithoutEventScheduleNestedInputObjectSchema =
  Schema
