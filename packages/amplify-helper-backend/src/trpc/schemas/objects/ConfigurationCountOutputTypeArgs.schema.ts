import { z } from 'zod'
import { ConfigurationCountOutputTypeSelectObjectSchema } from './ConfigurationCountOutputTypeSelect.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ConfigurationCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const ConfigurationCountOutputTypeArgsObjectSchema = Schema
