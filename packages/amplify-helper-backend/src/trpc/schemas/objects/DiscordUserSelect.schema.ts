import { z } from 'zod'
import { AccountArgsObjectSchema } from './AccountArgs.schema'
import { ParticipationFindManySchema } from '../findManyParticipation.schema'
import { AnswerFindManySchema } from '../findManyAnswer.schema'
import { DiscordEventAttendeeFindManySchema } from '../findManyDiscordEventAttendee.schema'
import { DiscordEventFindManySchema } from '../findManyDiscordEvent.schema'
import { EventScheduleFindManySchema } from '../findManyEventSchedule.schema'
import { DiscordUserCountOutputTypeArgsObjectSchema } from './DiscordUserCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserSelect> = z
  .object({
    id: z.boolean().optional(),
    account: z
      .union([z.boolean(), z.lazy(() => AccountArgsObjectSchema)])
      .optional(),
    accountId: z.boolean().optional(),
    participations: z
      .union([z.boolean(), z.lazy(() => ParticipationFindManySchema)])
      .optional(),
    answers: z.union([z.boolean(), z.lazy(() => AnswerFindManySchema)]).optional(),
    attended: z
      .union([z.boolean(), z.lazy(() => DiscordEventAttendeeFindManySchema)])
      .optional(),
    createdEvents: z
      .union([z.boolean(), z.lazy(() => DiscordEventFindManySchema)])
      .optional(),
    createdSchedules: z
      .union([z.boolean(), z.lazy(() => EventScheduleFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => DiscordUserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const DiscordUserSelectObjectSchema = Schema
