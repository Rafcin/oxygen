import { z } from 'zod'
import { ParticipationWhereInputObjectSchema } from './objects/ParticipationWhereInput.schema'

export const ParticipationDeleteManySchema = z.object({
  where: ParticipationWhereInputObjectSchema.optional(),
})
