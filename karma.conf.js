/* eslint-disable import/no-extraneous-dependencies */
const { createDefaultConfig } = require('@open-wc/testing-karma')
const merge = require('deepmerge')
const fakeStreamModules = require('@rdfjs-elements/testing')

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        {
          pattern: config.grep ? config.grep : 'packages/*/test/**/*.test.js',
          type: 'module',
        },
      ],

      esm: {
        nodeResolve: true,
        responseTransformers: [fakeStreamModules()],
        coverageExclude: ['packages/rdf-editor/src/mode/*.js'],
      },
      // you can overwrite/extend the config further
    })
  )
  return config
}
