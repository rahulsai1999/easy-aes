import typescript from "rollup-plugin-typescript2";
import nodePollyfills from "rollup-plugin-node-polyfills";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "default",
    },
    {
      file: pkg.module,
      format: "es",
      exports: "default",
    },
  ],
  external: [...Object.keys(pkg.devDependencies || {}), "crypto"],
  plugins: [
    nodePollyfills(),
    typescript({
      typescript: require("typescript"),
    }),
  ],
};
