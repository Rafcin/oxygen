import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const ConfigurationWhereUniqueInputObjectSchema = Schema
