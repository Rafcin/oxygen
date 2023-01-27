import { z } from 'zod'
import { AnswerCreateWithoutParticipationInputObjectSchema } from './AnswerCreateWithoutParticipationInput.schema'
import { AnswerUncheckedCreateWithoutParticipationInputObjectSchema } from './AnswerUncheckedCreateWithoutParticipationInput.schema'
import { AnswerCreateOrConnectWithoutParticipationInputObjectSchema } from './AnswerCreateOrConnectWithoutParticipationInput.schema'
import { AnswerUpsertWithoutParticipationInputObjectSchema } from './AnswerUpsertWithoutParticipationInput.schema'
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema'
import { AnswerUpdateWithoutParticipationInputObjectSchema } from './AnswerUpdateWithoutParticipationInput.schema'
import { AnswerUncheckedUpdateWithoutParticipationInputObjectSchema } from './AnswerUncheckedUpdateWithoutParticipationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerUpdateOneWithoutParticipationNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AnswerCreateWithoutParticipationInputObjectSchema),
        z.lazy(() => AnswerUncheckedCreateWithoutParticipationInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AnswerCreateOrConnectWithoutParticipationInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => AnswerUpsertWithoutParticipationInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => AnswerWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => AnswerUpdateWithoutParticipationInputObjectSchema),
        z.lazy(() => AnswerUncheckedUpdateWithoutParticipationInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const AnswerUpdateOneWithoutParticipationNestedInputObjectSchema = Schema
