import { z } from 'zod'
import { AccessLevelRoleCreateNestedOneWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleCreateNestedOneWithoutDiscordRoleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleCreateWithoutParticipationInput> = z
  .object({
    id: z.string(),
    role: z
      .lazy(() => AccessLevelRoleCreateNestedOneWithoutDiscordRoleInputObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordRoleCreateWithoutParticipationInputObjectSchema = Schema
