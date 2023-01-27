import { z } from 'zod'
import { ConfigurationCreateWithoutFeaturesInputObjectSchema } from './ConfigurationCreateWithoutFeaturesInput.schema'
import { ConfigurationUncheckedCreateWithoutFeaturesInputObjectSchema } from './ConfigurationUncheckedCreateWithoutFeaturesInput.schema'
import { ConfigurationCreateOrConnectWithoutFeaturesInputObjectSchema } from './ConfigurationCreateOrConnectWithoutFeaturesInput.schema'
import { ConfigurationUpsertWithoutFeaturesInputObjectSchema } from './ConfigurationUpsertWithoutFeaturesInput.schema'
import { ConfigurationWhereUniqueInputObjectSchema } from './ConfigurationWhereUniqueInput.schema'
import { ConfigurationUpdateWithoutFeaturesInputObjectSchema } from './ConfigurationUpdateWithoutFeaturesInput.schema'
import { ConfigurationUncheckedUpdateWithoutFeaturesInputObjectSchema } from './ConfigurationUncheckedUpdateWithoutFeaturesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationUpdateOneRequiredWithoutFeaturesNestedInput> =
  z
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
      upsert: z
        .lazy(() => ConfigurationUpsertWithoutFeaturesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ConfigurationWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ConfigurationUpdateWithoutFeaturesInputObjectSchema),
          z.lazy(() => ConfigurationUncheckedUpdateWithoutFeaturesInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const ConfigurationUpdateOneRequiredWithoutFeaturesNestedInputObjectSchema =
  Schema
