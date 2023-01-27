import { z } from 'zod'
import { AccessLevelRoleCreateWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleCreateWithoutAccessLevelInput.schema'
import { AccessLevelRoleUncheckedCreateWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleUncheckedCreateWithoutAccessLevelInput.schema'
import { AccessLevelRoleCreateOrConnectWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleCreateOrConnectWithoutAccessLevelInput.schema'
import { AccessLevelRoleCreateManyAccessLevelInputEnvelopeObjectSchema } from './AccessLevelRoleCreateManyAccessLevelInputEnvelope.schema'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './AccessLevelRoleWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleUncheckedCreateNestedManyWithoutAccessLevelInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccessLevelRoleCreateWithoutAccessLevelInputObjectSchema),
          z
            .lazy(() => AccessLevelRoleCreateWithoutAccessLevelInputObjectSchema)
            .array(),
          z.lazy(
            () => AccessLevelRoleUncheckedCreateWithoutAccessLevelInputObjectSchema
          ),
          z
            .lazy(
              () => AccessLevelRoleUncheckedCreateWithoutAccessLevelInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => AccessLevelRoleCreateOrConnectWithoutAccessLevelInputObjectSchema
          ),
          z
            .lazy(
              () => AccessLevelRoleCreateOrConnectWithoutAccessLevelInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AccessLevelRoleCreateManyAccessLevelInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const AccessLevelRoleUncheckedCreateNestedManyWithoutAccessLevelInputObjectSchema =
  Schema
