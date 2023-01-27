import { z } from 'zod'
import { UserArgsObjectSchema } from './UserArgs.schema'
import { DiscordUserArgsObjectSchema } from './DiscordUserArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccountInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    DiscordUser: z
      .union([z.boolean(), z.lazy(() => DiscordUserArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const AccountIncludeObjectSchema = Schema
