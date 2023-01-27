import { z } from 'zod'
import { AuditLogSelectObjectSchema } from './objects/AuditLogSelect.schema'
import { AuditLogWhereUniqueInputObjectSchema } from './objects/AuditLogWhereUniqueInput.schema'

export const AuditLogDeleteOneSchema = z.object({
  select: AuditLogSelectObjectSchema.optional(),
  where: AuditLogWhereUniqueInputObjectSchema,
})
