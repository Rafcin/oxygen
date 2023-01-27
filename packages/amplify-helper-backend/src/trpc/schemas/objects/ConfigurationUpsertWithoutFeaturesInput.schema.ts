import { z } from 'zod'
import { ConfigurationUpdateWithoutFeaturesInputObjectSchema } from './ConfigurationUpdateWithoutFeaturesInput.schema'
import { ConfigurationUncheckedUpdateWithoutFeaturesInputObjectSchema } from './ConfigurationUncheckedUpdateWithoutFeaturesInput.schema'
import { ConfigurationCreateWithoutFeaturesInputObjectSchema } from './ConfigurationCreateWithoutFeaturesInput.schema'
import { ConfigurationUncheckedCreateWithoutFeaturesInputObjectSchema } from './ConfigurationUncheckedCreateWithoutFeaturesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationUpsertWithoutFeaturesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ConfigurationUpdateWithoutFeaturesInputObjectSchema),
      z.lazy(() => ConfigurationUncheckedUpdateWithoutFeaturesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ConfigurationCreateWithoutFeaturesInputObjectSchema),
      z.lazy(() => ConfigurationUncheckedCreateWithoutFeaturesInputObjectSchema),
    ]),
  })
  .strict()

export const ConfigurationUpsertWithoutFeaturesInputObjectSchema = Schema
