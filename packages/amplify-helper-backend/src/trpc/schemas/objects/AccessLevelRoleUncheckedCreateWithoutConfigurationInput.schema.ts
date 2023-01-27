import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleUncheckedCreateWithoutConfigurationInput> =
  z
    .object({
      id: z.string().optional(),
      accessLevelId: z.string(),
      discordRoleId: z.string(),
    })
    .strict()

export const AccessLevelRoleUncheckedCreateWithoutConfigurationInputObjectSchema =
  Schema
