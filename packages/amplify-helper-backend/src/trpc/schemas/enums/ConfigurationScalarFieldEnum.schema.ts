import { z } from 'zod'

export const ConfigurationScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'name',
  'githubOrganization',
])
