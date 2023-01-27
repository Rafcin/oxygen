import { z } from 'zod'
import { ConfigurationUpdateWithoutRolesInputObjectSchema } from './ConfigurationUpdateWithoutRolesInput.schema'
import { ConfigurationUncheckedUpdateWithoutRolesInputObjectSchema } from './ConfigurationUncheckedUpdateWithoutRolesInput.schema'
import { ConfigurationCreateWithoutRolesInputObjectSchema } from './ConfigurationCreateWithoutRolesInput.schema'
import { ConfigurationUncheckedCreateWithoutRolesInputObjectSchema } from './ConfigurationUncheckedCreateWithoutRolesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationUpsertWithoutRolesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ConfigurationUpdateWithoutRolesInputObjectSchema),
      z.lazy(() => ConfigurationUncheckedUpdateWithoutRolesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ConfigurationCreateWithoutRolesInputObjectSchema),
      z.lazy(() => ConfigurationUncheckedCreateWithoutRolesInputObjectSchema),
    ]),
  })
  .strict()

export const ConfigurationUpsertWithoutRolesInputObjectSchema = Schema
