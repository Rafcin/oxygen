import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationCreateManyInput> = z
  .object({
    id: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    name: z.string(),
    githubOrganization: z.string().optional().nullable(),
  })
  .strict()

export const ConfigurationCreateManyInputObjectSchema = Schema
