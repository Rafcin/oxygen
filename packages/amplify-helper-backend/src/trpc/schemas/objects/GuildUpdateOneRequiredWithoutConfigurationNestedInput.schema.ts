import { z } from 'zod'
import { GuildCreateWithoutConfigurationInputObjectSchema } from './GuildCreateWithoutConfigurationInput.schema'
import { GuildUncheckedCreateWithoutConfigurationInputObjectSchema } from './GuildUncheckedCreateWithoutConfigurationInput.schema'
import { GuildCreateOrConnectWithoutConfigurationInputObjectSchema } from './GuildCreateOrConnectWithoutConfigurationInput.schema'
import { GuildUpsertWithoutConfigurationInputObjectSchema } from './GuildUpsertWithoutConfigurationInput.schema'
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema'
import { GuildUpdateWithoutConfigurationInputObjectSchema } from './GuildUpdateWithoutConfigurationInput.schema'
import { GuildUncheckedUpdateWithoutConfigurationInputObjectSchema } from './GuildUncheckedUpdateWithoutConfigurationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildUpdateOneRequiredWithoutConfigurationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GuildCreateWithoutConfigurationInputObjectSchema),
          z.lazy(() => GuildUncheckedCreateWithoutConfigurationInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => GuildCreateOrConnectWithoutConfigurationInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => GuildUpsertWithoutConfigurationInputObjectSchema)
        .optional(),
      connect: z.lazy(() => GuildWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => GuildUpdateWithoutConfigurationInputObjectSchema),
          z.lazy(() => GuildUncheckedUpdateWithoutConfigurationInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const GuildUpdateOneRequiredWithoutConfigurationNestedInputObjectSchema =
  Schema
