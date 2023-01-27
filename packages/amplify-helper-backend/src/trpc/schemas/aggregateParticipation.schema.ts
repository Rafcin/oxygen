import { z } from 'zod'
import { ParticipationOrderByWithRelationInputObjectSchema } from './objects/ParticipationOrderByWithRelationInput.schema'
import { ParticipationWhereInputObjectSchema } from './objects/ParticipationWhereInput.schema'
import { ParticipationWhereUniqueInputObjectSchema } from './objects/ParticipationWhereUniqueInput.schema'
import { ParticipationCountAggregateInputObjectSchema } from './objects/ParticipationCountAggregateInput.schema'
import { ParticipationMinAggregateInputObjectSchema } from './objects/ParticipationMinAggregateInput.schema'
import { ParticipationMaxAggregateInputObjectSchema } from './objects/ParticipationMaxAggregateInput.schema'

export const ParticipationAggregateSchema = z.object({
  orderBy: z
    .union([
      ParticipationOrderByWithRelationInputObjectSchema,
      ParticipationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ParticipationWhereInputObjectSchema.optional(),
  cursor: ParticipationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ParticipationCountAggregateInputObjectSchema])
    .optional(),
  _min: ParticipationMinAggregateInputObjectSchema.optional(),
  _max: ParticipationMaxAggregateInputObjectSchema.optional(),
})
