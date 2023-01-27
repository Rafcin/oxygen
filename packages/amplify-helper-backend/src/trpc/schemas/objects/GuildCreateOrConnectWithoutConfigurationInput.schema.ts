import { z } from 'zod'
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema'
import { GuildCreateWithoutConfigurationInputObjectSchema } from './GuildCreateWithoutConfigurationInput.schema'
import { GuildUncheckedCreateWithoutConfigurationInputObjectSchema } from './GuildUncheckedCreateWithoutConfigurationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildCreateOrConnectWithoutConfigurationInput> = z
  .object({
    where: z.lazy(() => GuildWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => GuildCreateWithoutConfigurationInputObjectSchema),
      z.lazy(() => GuildUncheckedCreateWithoutConfigurationInputObjectSchema),
    ]),
  })
  .strict()

export const GuildCreateOrConnectWithoutConfigurationInputObjectSchema = Schema
