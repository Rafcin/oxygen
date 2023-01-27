import { z } from 'zod'
import { ConfigurationCreateWithoutGuildInputObjectSchema } from './ConfigurationCreateWithoutGuildInput.schema'
import { ConfigurationUncheckedCreateWithoutGuildInputObjectSchema } from './ConfigurationUncheckedCreateWithoutGuildInput.schema'
import { ConfigurationCreateOrConnectWithoutGuildInputObjectSchema } from './ConfigurationCreateOrConnectWithoutGuildInput.schema'
import { ConfigurationWhereUniqueInputObjectSchema } from './ConfigurationWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationUncheckedCreateNestedOneWithoutGuildInput> =
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
      connect: z.lazy(() => ConfigurationWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const ConfigurationUncheckedCreateNestedOneWithoutGuildInputObjectSchema =
  Schema
