import { z } from 'zod'
import { AccessLevelCreateNestedOneWithoutRoleInputObjectSchema } from './AccessLevelCreateNestedOneWithoutRoleInput.schema'
import { ConfigurationCreateNestedOneWithoutRolesInputObjectSchema } from './ConfigurationCreateNestedOneWithoutRolesInput.schema'
import { DiscordRoleCreateNestedOneWithoutRoleInputObjectSchema } from './DiscordRoleCreateNestedOneWithoutRoleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleCreateInput> = z
  .object({
    id: z.string().optional(),
    accessLevel: z.lazy(
      () => AccessLevelCreateNestedOneWithoutRoleInputObjectSchema
    ),
    Configuration: z
      .lazy(() => ConfigurationCreateNestedOneWithoutRolesInputObjectSchema)
      .optional(),
    discordRole: z.lazy(
      () => DiscordRoleCreateNestedOneWithoutRoleInputObjectSchema
    ),
  })
  .strict()

export const AccessLevelRoleCreateInputObjectSchema = Schema
