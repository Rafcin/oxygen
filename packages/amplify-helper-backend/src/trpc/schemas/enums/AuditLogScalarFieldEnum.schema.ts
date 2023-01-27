import { z } from 'zod'

export const AuditLogScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'userId',
  'action',
  'data',
])
