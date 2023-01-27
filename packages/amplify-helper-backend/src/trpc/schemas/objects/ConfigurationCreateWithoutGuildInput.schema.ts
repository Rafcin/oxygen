import { z } from 'zod'
import { AccessLevelRoleCreateNestedManyWithoutConfigurationInputObjectSchema } from './AccessLevelRoleCreateNestedManyWithoutConfigurationInput.schema'
import { ConfigurationFeatureCreateNestedManyWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureCreateNestedManyWithoutConfigurationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationCreateWithoutGuildInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    name: z.string(),
    roles: z
      .lazy(
        () => AccessLevelRoleCreateNestedManyWithoutConfigurationInputObjectSchema
      )
      .optional(),
    githubOrganization: z.string().optional().nullable(),
    features: z
      .lazy(
        () =>
          ConfigurationFeatureCreateNestedManyWithoutConfigurationInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const ConfigurationCreateWithoutGuildInputObjectSchema = Schema
