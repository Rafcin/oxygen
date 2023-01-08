import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import path from "path";
import { RollupOptions } from "rollup";
import analyze from "rollup-plugin-analyzer";
import externals from "rollup-plugin-node-externals";
import styles from "rollup-plugin-styles";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

type Options = {
  input: string[];
  packageDir: string;
};

export function rollupReact({ input, packageDir }: Options): RollupOptions[] {
  const resolvedInput = input.map((file) => path.resolve(packageDir, file));
  const options: Options = {
    input: resolvedInput,
    packageDir,
  };

  return [cjs(options), esm(options), css(options)];
}

function cjs({ input, packageDir }: Options): RollupOptions {
  return {
    input,
    output: {
      dir: `dist`,
      format: "cjs",
      sourcemap: false,
    },
    plugins: [
      json(),
      commonjs(),
      externals({ peerDeps: true }),
      typescript({
        declarationDir: `dist/types`,
        sourceMap: false,
      }),
      terser(),
      analyze(),
    ],
  };
}

function esm({ input, packageDir }: Options): RollupOptions {
  return {
    input,
    output: {
      dir: `dist`,
      format: "es",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: false,
    },
    plugins: [
      json(),
      commonjs(),
      externals({ peerDeps: true }),
      typescript({
        outDir: `dist`,
        declaration: false,
        sourceMap: false,
      }),
      terser(),
      analyze(),
    ],
  };
}

function css({ input, packageDir }: Options): RollupOptions {
  return {
    input,
    output: {
      dir: `dist`,
      format: "cjs",
      assetFileNames: "[name][extname]",
    },
    plugins: [styles({ mode: ["extract"] })],
  };
}
