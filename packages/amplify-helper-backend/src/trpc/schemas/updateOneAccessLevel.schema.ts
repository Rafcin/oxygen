import { z } from 'zod'
import { AccessLevelSelectObjectSchema } from './objects/AccessLevelSelect.schema'
import { AccessLevelIncludeObjectSchema } from './objects/AccessLevelInclude.schema'
import { AccessLevelUpdateInputObjectSchema } from './objects/AccessLevelUpdateInput.schema'
import { AccessLevelUncheckedUpdateInputObjectSchema } from './objects/AccessLevelUncheckedUpdateInput.schema'
import { AccessLevelWhereUniqueInputObjectSchema } from './objects/AccessLevelWhereUniqueInput.schema'

export const AccessLevelUpdateOneSchema = z.object({
  select: AccessLevelSelectObjectSchema.optional(),
  include: AccessLevelIncludeObjectSchema.optional(),
  data: z.union([
    AccessLevelUpdateInputObjectSchema,
    AccessLevelUncheckedUpdateInputObjectSchema,
  ]),
  where: AccessLevelWhereUniqueInputObjectSchema,
})
