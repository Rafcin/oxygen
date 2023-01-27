import { z } from 'zod'
import { DiscordRoleUpdateManyMutationInputObjectSchema } from './objects/DiscordRoleUpdateManyMutationInput.schema'
import { DiscordRoleWhereInputObjectSchema } from './objects/DiscordRoleWhereInput.schema'

export const DiscordRoleUpdateManySchema = z.object({
  data: DiscordRoleUpdateManyMutationInputObjectSchema,
  where: DiscordRoleWhereInputObjectSchema.optional(),
})
