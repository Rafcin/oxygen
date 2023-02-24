import { defineConfig } from 'tsup'

const tsupConfig = defineConfig({
  entryPoints: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  legacyOutput: true,
  sourcemap: true,
  minify: true,
  clean: true,
  splitting: false,
})

// eslint-disable-next-line import/no-default-export
export default tsupConfig
