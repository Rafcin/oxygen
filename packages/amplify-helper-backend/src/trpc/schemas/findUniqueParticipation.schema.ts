import { z } from 'zod'
import { ParticipationSelectObjectSchema } from './objects/ParticipationSelect.schema'
import { ParticipationIncludeObjectSchema } from './objects/ParticipationInclude.schema'
import { ParticipationWhereUniqueInputObjectSchema } from './objects/ParticipationWhereUniqueInput.schema'

export const ParticipationFindUniqueSchema = z.object({
  select: ParticipationSelectObjectSchema.optional(),
  include: ParticipationIncludeObjectSchema.optional(),
  where: ParticipationWhereUniqueInputObjectSchema,
})
