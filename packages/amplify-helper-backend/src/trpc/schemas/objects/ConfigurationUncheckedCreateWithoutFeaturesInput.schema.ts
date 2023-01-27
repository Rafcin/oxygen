import { z } from 'zod'
import { AccessLevelRoleUncheckedCreateNestedManyWithoutConfigurationInputObjectSchema } from './AccessLevelRoleUncheckedCreateNestedManyWithoutConfigurationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationUncheckedCreateWithoutFeaturesInput> = z
  .object({
    id: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    name: z.string(),
    roles: z
      .lazy(
        () =>
          AccessLevelRoleUncheckedCreateNestedManyWithoutConfigurationInputObjectSchema
      )
      .optional(),
    githubOrganization: z.string().optional().nullable(),
  })
  .strict()

export const ConfigurationUncheckedCreateWithoutFeaturesInputObjectSchema = Schema
