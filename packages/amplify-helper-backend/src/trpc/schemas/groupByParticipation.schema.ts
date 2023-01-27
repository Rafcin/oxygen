import { z } from 'zod'
import { ParticipationWhereInputObjectSchema } from './objects/ParticipationWhereInput.schema'
import { ParticipationOrderByWithAggregationInputObjectSchema } from './objects/ParticipationOrderByWithAggregationInput.schema'
import { ParticipationScalarWhereWithAggregatesInputObjectSchema } from './objects/ParticipationScalarWhereWithAggregatesInput.schema'
import { ParticipationScalarFieldEnumSchema } from './enums/ParticipationScalarFieldEnum.schema'

export const ParticipationGroupBySchema = z.object({
  where: ParticipationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ParticipationOrderByWithAggregationInputObjectSchema,
      ParticipationOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ParticipationScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ParticipationScalarFieldEnumSchema),
})
