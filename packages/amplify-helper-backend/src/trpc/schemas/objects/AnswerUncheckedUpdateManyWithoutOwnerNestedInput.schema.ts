import { z } from 'zod'
import { AnswerCreateWithoutOwnerInputObjectSchema } from './AnswerCreateWithoutOwnerInput.schema'
import { AnswerUncheckedCreateWithoutOwnerInputObjectSchema } from './AnswerUncheckedCreateWithoutOwnerInput.schema'
import { AnswerCreateOrConnectWithoutOwnerInputObjectSchema } from './AnswerCreateOrConnectWithoutOwnerInput.schema'
import { AnswerUpsertWithWhereUniqueWithoutOwnerInputObjectSchema } from './AnswerUpsertWithWhereUniqueWithoutOwnerInput.schema'
import { AnswerCreateManyOwnerInputEnvelopeObjectSchema } from './AnswerCreateManyOwnerInputEnvelope.schema'
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema'
import { AnswerUpdateWithWhereUniqueWithoutOwnerInputObjectSchema } from './AnswerUpdateWithWhereUniqueWithoutOwnerInput.schema'
import { AnswerUpdateManyWithWhereWithoutOwnerInputObjectSchema } from './AnswerUpdateManyWithWhereWithoutOwnerInput.schema'
import { AnswerScalarWhereInputObjectSchema } from './AnswerScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerUncheckedUpdateManyWithoutOwnerNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AnswerCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => AnswerCreateWithoutOwnerInputObjectSchema).array(),
        z.lazy(() => AnswerUncheckedCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => AnswerUncheckedCreateWithoutOwnerInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => AnswerCreateOrConnectWithoutOwnerInputObjectSchema),
        z.lazy(() => AnswerCreateOrConnectWithoutOwnerInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => AnswerUpsertWithWhereUniqueWithoutOwnerInputObjectSchema),
        z
          .lazy(() => AnswerUpsertWithWhereUniqueWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => AnswerCreateManyOwnerInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => AnswerWhereUniqueInputObjectSchema),
        z.lazy(() => AnswerWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => AnswerWhereUniqueInputObjectSchema),
        z.lazy(() => AnswerWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => AnswerWhereUniqueInputObjectSchema),
        z.lazy(() => AnswerWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => AnswerWhereUniqueInputObjectSchema),
        z.lazy(() => AnswerWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => AnswerUpdateWithWhereUniqueWithoutOwnerInputObjectSchema),
        z
          .lazy(() => AnswerUpdateWithWhereUniqueWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => AnswerUpdateManyWithWhereWithoutOwnerInputObjectSchema),
        z.lazy(() => AnswerUpdateManyWithWhereWithoutOwnerInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => AnswerScalarWhereInputObjectSchema),
        z.lazy(() => AnswerScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const AnswerUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema = Schema
