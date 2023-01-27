import { z } from 'zod'
import { AnswerSelectObjectSchema } from './objects/AnswerSelect.schema'
import { AnswerIncludeObjectSchema } from './objects/AnswerInclude.schema'
import { AnswerOrderByWithRelationInputObjectSchema } from './objects/AnswerOrderByWithRelationInput.schema'
import { AnswerWhereInputObjectSchema } from './objects/AnswerWhereInput.schema'
import { AnswerWhereUniqueInputObjectSchema } from './objects/AnswerWhereUniqueInput.schema'
import { AnswerScalarFieldEnumSchema } from './enums/AnswerScalarFieldEnum.schema'

export const AnswerFindManySchema = z.object({
  select: z.lazy(() => AnswerSelectObjectSchema.optional()),
  include: z.lazy(() => AnswerIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      AnswerOrderByWithRelationInputObjectSchema,
      AnswerOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AnswerWhereInputObjectSchema.optional(),
  cursor: AnswerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AnswerScalarFieldEnumSchema).optional(),
})
