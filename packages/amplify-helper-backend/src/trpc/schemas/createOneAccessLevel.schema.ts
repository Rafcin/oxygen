import { z } from 'zod'
import { AccessLevelSelectObjectSchema } from './objects/AccessLevelSelect.schema'
import { AccessLevelIncludeObjectSchema } from './objects/AccessLevelInclude.schema'
import { AccessLevelCreateInputObjectSchema } from './objects/AccessLevelCreateInput.schema'
import { AccessLevelUncheckedCreateInputObjectSchema } from './objects/AccessLevelUncheckedCreateInput.schema'

export const AccessLevelCreateOneSchema = z.object({
  select: AccessLevelSelectObjectSchema.optional(),
  include: AccessLevelIncludeObjectSchema.optional(),
  data: z.union([
    AccessLevelCreateInputObjectSchema,
    AccessLevelUncheckedCreateInputObjectSchema,
  ]),
})
