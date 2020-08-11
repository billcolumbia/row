const isDev = process.env.NODE_ENV === 'development'
import svelte from 'rollup-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
const glob = require('glob')

const entries = [
  'src/index.js'
]

const useConfig = (file) => {
  const name = file.match(/(\w|\d|\-)+(?=\.js)/)[0]
  return {
    input: file,
    cache: true,
    output: [
      {
        name: name,
        file: `dist/js/${name}.js`,
        format: 'es'
      },
      // in prod mode output an iife for old school browsers
      !isDev && {
        name: name,
        file: `dist/js/${name}.iife.js`,
        format: 'iife'
      }
    ],
    plugins: [
      svelte({ dev: true }),
      resolve({ browser: true, dedupe: ['svelte'] }),
      commonjs(),
      !isDev && babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] }),
      !isDev && terser()
    ]
  }
}

/**
 * Rollup is silly and won't support iife or umd format when there are multiple
 * entries... so we have to export a config that is an array and it will build
 * each file in a loop (presumably) So we are just mapping our config to our
 * entries array glob matches.
 */
export default entries
  .map(pattern => glob.sync(pattern))
  .flat()
  .map(useConfig)
