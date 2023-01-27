import { z } from 'zod'

export const EventScheduleScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'guildId',
  'createdById',
  'schedule',
])
