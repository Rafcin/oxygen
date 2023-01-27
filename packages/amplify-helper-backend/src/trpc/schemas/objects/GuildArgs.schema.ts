import { z } from 'zod'
import { GuildSelectObjectSchema } from './GuildSelect.schema'
import { GuildIncludeObjectSchema } from './GuildInclude.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildArgs> = z
  .object({
    select: z.lazy(() => GuildSelectObjectSchema).optional(),
    include: z.lazy(() => GuildIncludeObjectSchema).optional(),
  })
  .strict()

export const GuildArgsObjectSchema = Schema
