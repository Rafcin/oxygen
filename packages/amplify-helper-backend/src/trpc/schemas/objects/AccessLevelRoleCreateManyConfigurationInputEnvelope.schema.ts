import { z } from 'zod'
import { AccessLevelRoleCreateManyConfigurationInputObjectSchema } from './AccessLevelRoleCreateManyConfigurationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleCreateManyConfigurationInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => AccessLevelRoleCreateManyConfigurationInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const AccessLevelRoleCreateManyConfigurationInputEnvelopeObjectSchema = Schema
