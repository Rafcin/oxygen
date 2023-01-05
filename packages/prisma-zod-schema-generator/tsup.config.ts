import { defineConfig } from 'tsup'
import pkg from './package.json'

const tsupConfig = defineConfig({
  dts: true,
  entryPoints: [
    'src/index.tsx',
    'src/icons.tsx',
    'src/internal.tsx',
    'src/styles.ts',
  ],
  format: ['cjs', 'esm'],
  legacyOutput: true,
  sourcemap: true,
  splitting: false,
  clean: false,
})

// eslint-disable-next-line import/no-default-export
export default tsupConfig
