import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import del from 'rollup-plugin-delete'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

// If local build output a esm file with sourcemap
const isLocal = process.argv.includes('--local')
const outputFiles = isLocal ? [{ file: 'build/index.js', format: 'esm', sourcemap: true }] : [
      { file: pkg.main, format: 'cjs', sourcemap: false },
      { file: pkg.module, format: 'esm', sourcemap: false },
    ]

export default {
  input: 'src/index.js',
  output: outputFiles,
  plugins: [
    external(),
    commonjs(),
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      extensions: ['.js', '.ts', '.jsx'],
    }),
    postcss(),
    uglify(),
    del({ targets: ['dist/*'] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
}
