import { z } from 'zod'
import { ConfigurationWhereInputObjectSchema } from './ConfigurationWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationRelationFilter> = z
  .object({
    is: z
      .lazy(() => ConfigurationWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ConfigurationWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const ConfigurationRelationFilterObjectSchema = Schema
