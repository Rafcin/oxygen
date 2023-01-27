import { z } from 'zod'

export const DiscordEventScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'imageUrl',
  'location',
  'start',
  'createdById',
  'createdAt',
  'updatedAt',
  'scheduleId',
  'eventScheduleId',
])
