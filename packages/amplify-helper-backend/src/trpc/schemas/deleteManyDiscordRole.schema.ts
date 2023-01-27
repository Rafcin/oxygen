import { z } from 'zod'
import { DiscordRoleWhereInputObjectSchema } from './objects/DiscordRoleWhereInput.schema'

export const DiscordRoleDeleteManySchema = z.object({
  where: DiscordRoleWhereInputObjectSchema.optional(),
})
