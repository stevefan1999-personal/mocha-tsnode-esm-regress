require('ts-node/register/transpile-only')
require('@babel/register')({
  extensions: [
    '.jsx',
    '.js',
    '.mjs',
    '.ts',
    '.tsx'
  ]
})
require('tsconfig-paths/register')
require('source-map-support/register')
