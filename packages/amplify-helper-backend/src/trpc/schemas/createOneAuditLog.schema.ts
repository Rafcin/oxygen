import { z } from 'zod'
import { AuditLogSelectObjectSchema } from './objects/AuditLogSelect.schema'
import { AuditLogCreateInputObjectSchema } from './objects/AuditLogCreateInput.schema'
import { AuditLogUncheckedCreateInputObjectSchema } from './objects/AuditLogUncheckedCreateInput.schema'

export const AuditLogCreateOneSchema = z.object({
  select: AuditLogSelectObjectSchema.optional(),
  data: z.union([
    AuditLogCreateInputObjectSchema,
    AuditLogUncheckedCreateInputObjectSchema,
  ]),
})
