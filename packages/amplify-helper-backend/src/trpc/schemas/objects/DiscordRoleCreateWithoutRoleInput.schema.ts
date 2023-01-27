import { z } from 'zod'
import { ParticipationCreateNestedManyWithoutParticipantRolesInputObjectSchema } from './ParticipationCreateNestedManyWithoutParticipantRolesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleCreateWithoutRoleInput> = z
  .object({
    id: z.string(),
    participation: z
      .lazy(
        () => ParticipationCreateNestedManyWithoutParticipantRolesInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const DiscordRoleCreateWithoutRoleInputObjectSchema = Schema
