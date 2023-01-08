import { RollupOptions } from 'rollup'
import { rollupBase } from '@oxygen/rollup-swc-config'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const input = ['./src/index.ts']

export default function rollup(): RollupOptions[] {
  return rollupBase({
    input,
    packageDir: __dirname,
  })
}
