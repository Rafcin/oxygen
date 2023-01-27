import { z } from 'zod'
import { FeatureInputsSelectObjectSchema } from './objects/FeatureInputsSelect.schema'
import { FeatureInputsIncludeObjectSchema } from './objects/FeatureInputsInclude.schema'
import { FeatureInputsOrderByWithRelationInputObjectSchema } from './objects/FeatureInputsOrderByWithRelationInput.schema'
import { FeatureInputsWhereInputObjectSchema } from './objects/FeatureInputsWhereInput.schema'
import { FeatureInputsWhereUniqueInputObjectSchema } from './objects/FeatureInputsWhereUniqueInput.schema'
import { FeatureInputsScalarFieldEnumSchema } from './enums/FeatureInputsScalarFieldEnum.schema'

export const FeatureInputsFindManySchema = z.object({
  select: z.lazy(() => FeatureInputsSelectObjectSchema.optional()),
  include: z.lazy(() => FeatureInputsIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      FeatureInputsOrderByWithRelationInputObjectSchema,
      FeatureInputsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FeatureInputsWhereInputObjectSchema.optional(),
  cursor: FeatureInputsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(FeatureInputsScalarFieldEnumSchema).optional(),
})
