import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelCreateWithoutRoleInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
  })
  .strict()

export const AccessLevelCreateWithoutRoleInputObjectSchema = Schema
