import { z } from 'zod'

export const FeatureInputsScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'featureCode',
  'name',
  'secure',
])
