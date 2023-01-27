import { z } from 'zod'

export const ConfigurationFeatureScalarFieldEnumSchema = z.enum([
  'id',
  'configurationId',
  'featureCode',
  'enabled',
])
