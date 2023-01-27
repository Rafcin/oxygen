import { z } from 'zod'
import { UserCreateNestedOneWithoutAccountsInputObjectSchema } from './UserCreateNestedOneWithoutAccountsInput.schema'
import { DiscordUserCreateNestedOneWithoutAccountInputObjectSchema } from './DiscordUserCreateNestedOneWithoutAccountInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccountCreateInput> = z
  .object({
    id: z.string().optional(),
    type: z.string(),
    provider: z.string(),
    providerAccountId: z.string(),
    refresh_token: z.string().optional().nullable(),
    access_token: z.string().optional().nullable(),
    expires_at: z.number().optional().nullable(),
    token_type: z.string().optional().nullable(),
    scope: z.string().optional().nullable(),
    id_token: z.string().optional().nullable(),
    session_state: z.string().optional().nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputObjectSchema),
    DiscordUser: z
      .lazy(() => DiscordUserCreateNestedOneWithoutAccountInputObjectSchema)
      .optional(),
  })
  .strict()

export const AccountCreateInputObjectSchema = Schema
