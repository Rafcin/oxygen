/**
 * This file is included in `/next.config.mjs` which ensures the app isn't built with invalid env vars.
 * It has to be a `.mjs`-file to be imported there.
 */
import { serverSchema } from './schema'
import { client_env, formatErrors } from './client'

const _serverEnv = serverSchema.safeParse(process.env)

if (_serverEnv.success === false) {
  console.error(
    '[env/server.mjs] ❌ Invalid environment variables:\n',
    ...formatErrors(_serverEnv.error.format())
  )
  throw new Error('[env/server.mjs] ❌ Invalid environment variables.')
}

/**
 * Validate that server-side environment variables are not exposed to the client.
 */
for (let key of Object.keys(_serverEnv.data)) {
  if (key.startsWith('NEXT_PUBLIC_')) {
    console.warn(
      '[env/server.mjs] ❌ You are exposing a server-side env-variable:',
      key
    )

    throw new Error(
      '[env/server.mjs] ❌ You are exposing a server-side env-variable.'
    )
  }
}

export const server_env = { ..._serverEnv.data, ...client_env }