import { z } from 'zod'

export const DiscordEventAttendeeScalarFieldEnumSchema = z.enum([
  'eventId',
  'memberId',
  'createdAt',
  'updatedAt',
  'time',
])
