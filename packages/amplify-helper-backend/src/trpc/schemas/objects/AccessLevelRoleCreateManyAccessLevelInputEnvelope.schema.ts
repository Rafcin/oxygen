import { z } from 'zod'
import { AccessLevelRoleCreateManyAccessLevelInputObjectSchema } from './AccessLevelRoleCreateManyAccessLevelInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleCreateManyAccessLevelInputEnvelope> = z
  .object({
    data: z
      .lazy(() => AccessLevelRoleCreateManyAccessLevelInputObjectSchema)
      .array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const AccessLevelRoleCreateManyAccessLevelInputEnvelopeObjectSchema = Schema
