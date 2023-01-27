import { z } from 'zod'
import { ParticipationSelectObjectSchema } from './objects/ParticipationSelect.schema'
import { ParticipationIncludeObjectSchema } from './objects/ParticipationInclude.schema'
import { ParticipationOrderByWithRelationInputObjectSchema } from './objects/ParticipationOrderByWithRelationInput.schema'
import { ParticipationWhereInputObjectSchema } from './objects/ParticipationWhereInput.schema'
import { ParticipationWhereUniqueInputObjectSchema } from './objects/ParticipationWhereUniqueInput.schema'
import { ParticipationScalarFieldEnumSchema } from './enums/ParticipationScalarFieldEnum.schema'

export const ParticipationFindFirstSchema = z.object({
  select: ParticipationSelectObjectSchema.optional(),
  include: ParticipationIncludeObjectSchema.optional(),
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
  distinct: z.array(ParticipationScalarFieldEnumSchema).optional(),
})
