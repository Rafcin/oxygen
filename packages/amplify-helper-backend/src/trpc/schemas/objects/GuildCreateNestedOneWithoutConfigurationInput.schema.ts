import { z } from 'zod'
import { GuildCreateWithoutConfigurationInputObjectSchema } from './GuildCreateWithoutConfigurationInput.schema'
import { GuildUncheckedCreateWithoutConfigurationInputObjectSchema } from './GuildUncheckedCreateWithoutConfigurationInput.schema'
import { GuildCreateOrConnectWithoutConfigurationInputObjectSchema } from './GuildCreateOrConnectWithoutConfigurationInput.schema'
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildCreateNestedOneWithoutConfigurationInput> = z
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
    connect: z.lazy(() => GuildWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const GuildCreateNestedOneWithoutConfigurationInputObjectSchema = Schema
