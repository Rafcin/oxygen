import { z } from 'zod'
import { DiscordRoleSelectObjectSchema } from './DiscordRoleSelect.schema'
import { DiscordRoleIncludeObjectSchema } from './DiscordRoleInclude.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleArgs> = z
  .object({
    select: z.lazy(() => DiscordRoleSelectObjectSchema).optional(),
    include: z.lazy(() => DiscordRoleIncludeObjectSchema).optional(),
  })
  .strict()

export const DiscordRoleArgsObjectSchema = Schema
