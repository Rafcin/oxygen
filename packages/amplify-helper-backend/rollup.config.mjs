// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import analyze from 'rollup-plugin-analyzer';
import externals from 'rollup-plugin-node-externals';
import { terser } from 'rollup-plugin-terser';

const config = defineConfig([
  // CJS config
  {
    input: ['./src/index.ts'],
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: false,
    },
    plugins: [
      json(),
      commonjs(),
      externals({ peerDeps: true }),
      typescript({ declarationDir: 'dist/types', sourceMap: false }),
      terser(),
      analyze()
    ],
  },
  // ESM config
  {
    input: ['./src/index.ts'],
    output: {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: false,
    },
    plugins: [
      json(),
      commonjs(),
      externals({ peerDeps: true }),
      typescript({ outDir: 'dist/esm', declaration: false, sourceMap: false }),
      terser(),
      analyze()
    ],
  }
]);

export default config;