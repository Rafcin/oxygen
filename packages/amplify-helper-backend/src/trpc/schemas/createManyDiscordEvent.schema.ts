import { z } from 'zod'
import { DiscordEventCreateManyInputObjectSchema } from './objects/DiscordEventCreateManyInput.schema'

export const DiscordEventCreateManySchema = z.object({
  data: z.union([
    DiscordEventCreateManyInputObjectSchema,
    z.array(DiscordEventCreateManyInputObjectSchema),
  ]),
})
