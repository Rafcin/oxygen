import { z } from 'zod'

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'username',
  'email',
  'emailVerified',
  'image',
])
