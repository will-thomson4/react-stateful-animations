const typescript = require('rollup-plugin-typescript2');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const json = require('@rollup/plugin-json');
module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    typescript(),
    json(),
  ],
  external: [
    'react',
    'react-dom',
    '@lottielab/lottie-player/react',
    /^react\/.*/, // This will externalize all React subpaths
    /^react-dom\/.*/, // This will externalize all React-DOM subpaths
  ],
};
