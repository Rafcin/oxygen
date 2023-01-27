import { z } from 'zod'
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema'
import { AnswerCreateWithoutOwnerInputObjectSchema } from './AnswerCreateWithoutOwnerInput.schema'
import { AnswerUncheckedCreateWithoutOwnerInputObjectSchema } from './AnswerUncheckedCreateWithoutOwnerInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerCreateOrConnectWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AnswerCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => AnswerUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict()

export const AnswerCreateOrConnectWithoutOwnerInputObjectSchema = Schema
