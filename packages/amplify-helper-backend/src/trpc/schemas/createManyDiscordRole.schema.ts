import { z } from 'zod'
import { DiscordRoleCreateManyInputObjectSchema } from './objects/DiscordRoleCreateManyInput.schema'

export const DiscordRoleCreateManySchema = z.object({
  data: z.union([
    DiscordRoleCreateManyInputObjectSchema,
    z.array(DiscordRoleCreateManyInputObjectSchema),
  ]),
})
