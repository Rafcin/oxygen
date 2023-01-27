import { z } from 'zod'
import { GuildWhereInputObjectSchema } from './objects/GuildWhereInput.schema'

export const GuildDeleteManySchema = z.object({
  where: GuildWhereInputObjectSchema.optional(),
})
