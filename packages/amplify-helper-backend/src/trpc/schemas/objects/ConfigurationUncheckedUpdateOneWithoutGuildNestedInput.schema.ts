import { z } from 'zod'
import { ConfigurationCreateWithoutGuildInputObjectSchema } from './ConfigurationCreateWithoutGuildInput.schema'
import { ConfigurationUncheckedCreateWithoutGuildInputObjectSchema } from './ConfigurationUncheckedCreateWithoutGuildInput.schema'
import { ConfigurationCreateOrConnectWithoutGuildInputObjectSchema } from './ConfigurationCreateOrConnectWithoutGuildInput.schema'
import { ConfigurationUpsertWithoutGuildInputObjectSchema } from './ConfigurationUpsertWithoutGuildInput.schema'
import { ConfigurationWhereUniqueInputObjectSchema } from './ConfigurationWhereUniqueInput.schema'
import { ConfigurationUpdateWithoutGuildInputObjectSchema } from './ConfigurationUpdateWithoutGuildInput.schema'
import { ConfigurationUncheckedUpdateWithoutGuildInputObjectSchema } from './ConfigurationUncheckedUpdateWithoutGuildInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationUncheckedUpdateOneWithoutGuildNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ConfigurationCreateWithoutGuildInputObjectSchema),
          z.lazy(() => ConfigurationUncheckedCreateWithoutGuildInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ConfigurationCreateOrConnectWithoutGuildInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ConfigurationUpsertWithoutGuildInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => ConfigurationWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ConfigurationUpdateWithoutGuildInputObjectSchema),
          z.lazy(() => ConfigurationUncheckedUpdateWithoutGuildInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const ConfigurationUncheckedUpdateOneWithoutGuildNestedInputObjectSchema =
  Schema
