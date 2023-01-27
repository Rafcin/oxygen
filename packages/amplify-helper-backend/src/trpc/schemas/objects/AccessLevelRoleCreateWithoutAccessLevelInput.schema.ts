import { z } from 'zod'
import { ConfigurationCreateNestedOneWithoutRolesInputObjectSchema } from './ConfigurationCreateNestedOneWithoutRolesInput.schema'
import { DiscordRoleCreateNestedOneWithoutRoleInputObjectSchema } from './DiscordRoleCreateNestedOneWithoutRoleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleCreateWithoutAccessLevelInput> = z
  .object({
    id: z.string().optional(),
    Configuration: z
      .lazy(() => ConfigurationCreateNestedOneWithoutRolesInputObjectSchema)
      .optional(),
    discordRole: z.lazy(
      () => DiscordRoleCreateNestedOneWithoutRoleInputObjectSchema
    ),
  })
  .strict()

export const AccessLevelRoleCreateWithoutAccessLevelInputObjectSchema = Schema
