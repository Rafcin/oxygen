import { z } from 'zod'
import { AccessLevelSelectObjectSchema } from './objects/AccessLevelSelect.schema'
import { AccessLevelIncludeObjectSchema } from './objects/AccessLevelInclude.schema'
import { AccessLevelWhereUniqueInputObjectSchema } from './objects/AccessLevelWhereUniqueInput.schema'
import { AccessLevelCreateInputObjectSchema } from './objects/AccessLevelCreateInput.schema'
import { AccessLevelUncheckedCreateInputObjectSchema } from './objects/AccessLevelUncheckedCreateInput.schema'
import { AccessLevelUpdateInputObjectSchema } from './objects/AccessLevelUpdateInput.schema'
import { AccessLevelUncheckedUpdateInputObjectSchema } from './objects/AccessLevelUncheckedUpdateInput.schema'

export const AccessLevelUpsertSchema = z.object({
  select: AccessLevelSelectObjectSchema.optional(),
  include: AccessLevelIncludeObjectSchema.optional(),
  where: AccessLevelWhereUniqueInputObjectSchema,
  create: z.union([
    AccessLevelCreateInputObjectSchema,
    AccessLevelUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AccessLevelUpdateInputObjectSchema,
    AccessLevelUncheckedUpdateInputObjectSchema,
  ]),
})
