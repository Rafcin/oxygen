import { z } from 'zod'
import { DiscordEventAttendeeSelectObjectSchema } from './objects/DiscordEventAttendeeSelect.schema'
import { DiscordEventAttendeeIncludeObjectSchema } from './objects/DiscordEventAttendeeInclude.schema'
import { DiscordEventAttendeeOrderByWithRelationInputObjectSchema } from './objects/DiscordEventAttendeeOrderByWithRelationInput.schema'
import { DiscordEventAttendeeWhereInputObjectSchema } from './objects/DiscordEventAttendeeWhereInput.schema'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './objects/DiscordEventAttendeeWhereUniqueInput.schema'
import { DiscordEventAttendeeScalarFieldEnumSchema } from './enums/DiscordEventAttendeeScalarFieldEnum.schema'

export const DiscordEventAttendeeFindManySchema = z.object({
  select: z.lazy(() => DiscordEventAttendeeSelectObjectSchema.optional()),
  include: z.lazy(() => DiscordEventAttendeeIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      DiscordEventAttendeeOrderByWithRelationInputObjectSchema,
      DiscordEventAttendeeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DiscordEventAttendeeWhereInputObjectSchema.optional(),
  cursor: DiscordEventAttendeeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DiscordEventAttendeeScalarFieldEnumSchema).optional(),
})
