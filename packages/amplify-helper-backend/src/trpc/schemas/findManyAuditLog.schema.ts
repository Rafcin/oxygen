import { z } from 'zod'
import { AuditLogSelectObjectSchema } from './objects/AuditLogSelect.schema'
import { AuditLogOrderByWithRelationInputObjectSchema } from './objects/AuditLogOrderByWithRelationInput.schema'
import { AuditLogWhereInputObjectSchema } from './objects/AuditLogWhereInput.schema'
import { AuditLogWhereUniqueInputObjectSchema } from './objects/AuditLogWhereUniqueInput.schema'
import { AuditLogScalarFieldEnumSchema } from './enums/AuditLogScalarFieldEnum.schema'

export const AuditLogFindManySchema = z.object({
  select: z.lazy(() => AuditLogSelectObjectSchema.optional()),
  orderBy: z
    .union([
      AuditLogOrderByWithRelationInputObjectSchema,
      AuditLogOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AuditLogWhereInputObjectSchema.optional(),
  cursor: AuditLogWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AuditLogScalarFieldEnumSchema).optional(),
})
