import { z } from 'zod'
import { GuildCreateManyInputObjectSchema } from './objects/GuildCreateManyInput.schema'

export const GuildCreateManySchema = z.object({
  data: z.union([
    GuildCreateManyInputObjectSchema,
    z.array(GuildCreateManyInputObjectSchema),
  ]),
})
