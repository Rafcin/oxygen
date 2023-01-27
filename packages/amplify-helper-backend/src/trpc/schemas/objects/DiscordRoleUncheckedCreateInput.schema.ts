import { z } from 'zod'
import { ParticipationUncheckedCreateNestedManyWithoutParticipantRolesInputObjectSchema } from './ParticipationUncheckedCreateNestedManyWithoutParticipantRolesInput.schema'
import { AccessLevelRoleUncheckedCreateNestedOneWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleUncheckedCreateNestedOneWithoutDiscordRoleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleUncheckedCreateInput> = z
  .object({
    id: z.string(),
    participation: z
      .lazy(
        () =>
          ParticipationUncheckedCreateNestedManyWithoutParticipantRolesInputObjectSchema
      )
      .optional(),
    role: z
      .lazy(
        () =>
          AccessLevelRoleUncheckedCreateNestedOneWithoutDiscordRoleInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const DiscordRoleUncheckedCreateInputObjectSchema = Schema
