import { z } from 'zod'
import { ConfigurationWhereUniqueInputObjectSchema } from './ConfigurationWhereUniqueInput.schema'
import { ConfigurationCreateWithoutRolesInputObjectSchema } from './ConfigurationCreateWithoutRolesInput.schema'
import { ConfigurationUncheckedCreateWithoutRolesInputObjectSchema } from './ConfigurationUncheckedCreateWithoutRolesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationCreateOrConnectWithoutRolesInput> = z
  .object({
    where: z.lazy(() => ConfigurationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ConfigurationCreateWithoutRolesInputObjectSchema),
      z.lazy(() => ConfigurationUncheckedCreateWithoutRolesInputObjectSchema),
    ]),
  })
  .strict()

export const ConfigurationCreateOrConnectWithoutRolesInputObjectSchema = Schema
