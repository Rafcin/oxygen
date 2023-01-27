import { z } from 'zod'
import { ConfigurationSelectObjectSchema } from './ConfigurationSelect.schema'
import { ConfigurationIncludeObjectSchema } from './ConfigurationInclude.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationArgs> = z
  .object({
    select: z.lazy(() => ConfigurationSelectObjectSchema).optional(),
    include: z.lazy(() => ConfigurationIncludeObjectSchema).optional(),
  })
  .strict()

export const ConfigurationArgsObjectSchema = Schema
