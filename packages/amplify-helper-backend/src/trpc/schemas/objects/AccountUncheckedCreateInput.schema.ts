import { z } from 'zod'
import { DiscordUserUncheckedCreateNestedOneWithoutAccountInputObjectSchema } from './DiscordUserUncheckedCreateNestedOneWithoutAccountInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
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
    DiscordUser: z
      .lazy(() => DiscordUserUncheckedCreateNestedOneWithoutAccountInputObjectSchema)
      .optional(),
  })
  .strict()

export const AccountUncheckedCreateInputObjectSchema = Schema
