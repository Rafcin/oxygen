import { z } from 'zod'
import { AccessLevelSelectObjectSchema } from './objects/AccessLevelSelect.schema'
import { AccessLevelIncludeObjectSchema } from './objects/AccessLevelInclude.schema'
import { AccessLevelWhereUniqueInputObjectSchema } from './objects/AccessLevelWhereUniqueInput.schema'

export const AccessLevelFindUniqueSchema = z.object({
  select: AccessLevelSelectObjectSchema.optional(),
  include: AccessLevelIncludeObjectSchema.optional(),
  where: AccessLevelWhereUniqueInputObjectSchema,
})
