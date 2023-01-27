import { z } from 'zod'
import { AccessLevelWhereInputObjectSchema } from './objects/AccessLevelWhereInput.schema'

export const AccessLevelDeleteManySchema = z.object({
  where: AccessLevelWhereInputObjectSchema.optional(),
})
