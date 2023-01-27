import { z } from 'zod'
import { ParticipationCreateManyInputObjectSchema } from './objects/ParticipationCreateManyInput.schema'

export const ParticipationCreateManySchema = z.object({
  data: z.union([
    ParticipationCreateManyInputObjectSchema,
    z.array(ParticipationCreateManyInputObjectSchema),
  ]),
})
