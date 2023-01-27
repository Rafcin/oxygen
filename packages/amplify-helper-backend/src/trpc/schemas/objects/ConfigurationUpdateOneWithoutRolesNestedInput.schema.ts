import { z } from 'zod'
import { ConfigurationCreateWithoutRolesInputObjectSchema } from './ConfigurationCreateWithoutRolesInput.schema'
import { ConfigurationUncheckedCreateWithoutRolesInputObjectSchema } from './ConfigurationUncheckedCreateWithoutRolesInput.schema'
import { ConfigurationCreateOrConnectWithoutRolesInputObjectSchema } from './ConfigurationCreateOrConnectWithoutRolesInput.schema'
import { ConfigurationUpsertWithoutRolesInputObjectSchema } from './ConfigurationUpsertWithoutRolesInput.schema'
import { ConfigurationWhereUniqueInputObjectSchema } from './ConfigurationWhereUniqueInput.schema'
import { ConfigurationUpdateWithoutRolesInputObjectSchema } from './ConfigurationUpdateWithoutRolesInput.schema'
import { ConfigurationUncheckedUpdateWithoutRolesInputObjectSchema } from './ConfigurationUncheckedUpdateWithoutRolesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationUpdateOneWithoutRolesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ConfigurationCreateWithoutRolesInputObjectSchema),
        z.lazy(() => ConfigurationUncheckedCreateWithoutRolesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ConfigurationCreateOrConnectWithoutRolesInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => ConfigurationUpsertWithoutRolesInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ConfigurationWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ConfigurationUpdateWithoutRolesInputObjectSchema),
        z.lazy(() => ConfigurationUncheckedUpdateWithoutRolesInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const ConfigurationUpdateOneWithoutRolesNestedInputObjectSchema = Schema
