import { z } from 'zod'
import { ParticipationUpdateManyMutationInputObjectSchema } from './objects/ParticipationUpdateManyMutationInput.schema'
import { ParticipationWhereInputObjectSchema } from './objects/ParticipationWhereInput.schema'

export const ParticipationUpdateManySchema = z.object({
  data: ParticipationUpdateManyMutationInputObjectSchema,
  where: ParticipationWhereInputObjectSchema.optional(),
})
