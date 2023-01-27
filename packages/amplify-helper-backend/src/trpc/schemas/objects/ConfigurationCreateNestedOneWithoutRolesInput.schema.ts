import { z } from 'zod'
import { ConfigurationCreateWithoutRolesInputObjectSchema } from './ConfigurationCreateWithoutRolesInput.schema'
import { ConfigurationUncheckedCreateWithoutRolesInputObjectSchema } from './ConfigurationUncheckedCreateWithoutRolesInput.schema'
import { ConfigurationCreateOrConnectWithoutRolesInputObjectSchema } from './ConfigurationCreateOrConnectWithoutRolesInput.schema'
import { ConfigurationWhereUniqueInputObjectSchema } from './ConfigurationWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationCreateNestedOneWithoutRolesInput> = z
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
    connect: z.lazy(() => ConfigurationWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const ConfigurationCreateNestedOneWithoutRolesInputObjectSchema = Schema
