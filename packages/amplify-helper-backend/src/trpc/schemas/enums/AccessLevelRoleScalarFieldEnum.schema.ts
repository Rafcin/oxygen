import { z } from 'zod'

export const AccessLevelRoleScalarFieldEnumSchema = z.enum([
  'id',
  'accessLevelId',
  'configurationId',
  'discordRoleId',
])
