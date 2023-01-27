import { z } from 'zod'

export const FeatureScalarFieldEnumSchema = z.enum([
  'code',
  'name',
  'description',
  'featureTypeCode',
])
