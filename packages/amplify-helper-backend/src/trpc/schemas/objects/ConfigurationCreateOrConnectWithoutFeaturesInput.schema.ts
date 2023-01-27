import { z } from 'zod'
import { ConfigurationWhereUniqueInputObjectSchema } from './ConfigurationWhereUniqueInput.schema'
import { ConfigurationCreateWithoutFeaturesInputObjectSchema } from './ConfigurationCreateWithoutFeaturesInput.schema'
import { ConfigurationUncheckedCreateWithoutFeaturesInputObjectSchema } from './ConfigurationUncheckedCreateWithoutFeaturesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationCreateOrConnectWithoutFeaturesInput> = z
  .object({
    where: z.lazy(() => ConfigurationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ConfigurationCreateWithoutFeaturesInputObjectSchema),
      z.lazy(() => ConfigurationUncheckedCreateWithoutFeaturesInputObjectSchema),
    ]),
  })
  .strict()

export const ConfigurationCreateOrConnectWithoutFeaturesInputObjectSchema = Schema
