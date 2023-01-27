import { z } from 'zod'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './AccessLevelRoleWhereUniqueInput.schema'
import { AccessLevelRoleCreateWithoutConfigurationInputObjectSchema } from './AccessLevelRoleCreateWithoutConfigurationInput.schema'
import { AccessLevelRoleUncheckedCreateWithoutConfigurationInputObjectSchema } from './AccessLevelRoleUncheckedCreateWithoutConfigurationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleCreateOrConnectWithoutConfigurationInput> =
  z
    .object({
      where: z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AccessLevelRoleCreateWithoutConfigurationInputObjectSchema),
        z.lazy(
          () => AccessLevelRoleUncheckedCreateWithoutConfigurationInputObjectSchema
        ),
      ]),
    })
    .strict()

export const AccessLevelRoleCreateOrConnectWithoutConfigurationInputObjectSchema =
  Schema
