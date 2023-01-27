import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { ParticipationListRelationFilterObjectSchema } from './ParticipationListRelationFilter.schema'
import { AccessLevelRoleRelationFilterObjectSchema } from './AccessLevelRoleRelationFilter.schema'
import { AccessLevelRoleWhereInputObjectSchema } from './AccessLevelRoleWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiscordRoleWhereInputObjectSchema),
        z.lazy(() => DiscordRoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiscordRoleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiscordRoleWhereInputObjectSchema),
        z.lazy(() => DiscordRoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    participation: z
      .lazy(() => ParticipationListRelationFilterObjectSchema)
      .optional(),
    role: z
      .union([
        z.lazy(() => AccessLevelRoleRelationFilterObjectSchema),
        z.lazy(() => AccessLevelRoleWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export const DiscordRoleWhereInputObjectSchema = Schema
