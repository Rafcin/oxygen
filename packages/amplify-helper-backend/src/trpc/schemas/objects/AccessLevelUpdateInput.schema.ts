import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { AccessLevelRoleUpdateManyWithoutAccessLevelNestedInputObjectSchema } from './AccessLevelRoleUpdateManyWithoutAccessLevelNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    role: z
      .lazy(() => AccessLevelRoleUpdateManyWithoutAccessLevelNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const AccessLevelUpdateInputObjectSchema = Schema
