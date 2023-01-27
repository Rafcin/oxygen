import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiscordRoleScalarWhereInputObjectSchema),
        z.lazy(() => DiscordRoleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiscordRoleScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiscordRoleScalarWhereInputObjectSchema),
        z.lazy(() => DiscordRoleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const DiscordRoleScalarWhereInputObjectSchema = Schema
