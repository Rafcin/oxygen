import { z } from 'zod'
import { AccessLevelUpdateManyMutationInputObjectSchema } from './objects/AccessLevelUpdateManyMutationInput.schema'
import { AccessLevelWhereInputObjectSchema } from './objects/AccessLevelWhereInput.schema'

export const AccessLevelUpdateManySchema = z.object({
  data: AccessLevelUpdateManyMutationInputObjectSchema,
  where: AccessLevelWhereInputObjectSchema.optional(),
})
