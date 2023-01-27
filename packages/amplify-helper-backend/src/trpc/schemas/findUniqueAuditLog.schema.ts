import { z } from 'zod'
import { AuditLogSelectObjectSchema } from './objects/AuditLogSelect.schema'
import { AuditLogWhereUniqueInputObjectSchema } from './objects/AuditLogWhereUniqueInput.schema'

export const AuditLogFindUniqueSchema = z.object({
  select: AuditLogSelectObjectSchema.optional(),
  where: AuditLogWhereUniqueInputObjectSchema,
})
