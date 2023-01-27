import { z } from 'zod'
import { ConfigurationCreateWithoutFeaturesInputObjectSchema } from './ConfigurationCreateWithoutFeaturesInput.schema'
import { ConfigurationUncheckedCreateWithoutFeaturesInputObjectSchema } from './ConfigurationUncheckedCreateWithoutFeaturesInput.schema'
import { ConfigurationCreateOrConnectWithoutFeaturesInputObjectSchema } from './ConfigurationCreateOrConnectWithoutFeaturesInput.schema'
import { ConfigurationWhereUniqueInputObjectSchema } from './ConfigurationWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationCreateNestedOneWithoutFeaturesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ConfigurationCreateWithoutFeaturesInputObjectSchema),
        z.lazy(() => ConfigurationUncheckedCreateWithoutFeaturesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ConfigurationCreateOrConnectWithoutFeaturesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ConfigurationWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const ConfigurationCreateNestedOneWithoutFeaturesInputObjectSchema = Schema
