import { defineConfig } from 'tsup'

const tsupConfig = defineConfig({
  dts: true,
  entryPoints: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  //inject: ['./src/react-shim.js'],
  // ! .cjs/.mjs doesn't work with Angular's webpack4 config by default!
  legacyOutput: true,
  sourcemap: true,
  splitting: false,
  clean: false,
})

// eslint-disable-next-line import/no-default-export
export default tsupConfig
