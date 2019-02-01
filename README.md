# eslint-plugin-absolute-import

[![build status](https://travis-ci.org/mcclowes/eslint-plugin-absolute-import.svg?branch=master)](https://travis-ci.org/mcclowes/eslint-plugin-absolute-import)
[![Coverage Status](https://coveralls.io/repos/github/mcclowes/eslint-plugin-absolute-import/badge.svg?branch=master)](https://coveralls.io/github/mcclowes/eslint-plugin-absolute-import?branch=master)
[![win32 build status](https://ci.appveyor.com/api/projects/status/3mw2fifalmjlqf56/branch/master?svg=true)](https://ci.appveyor.com/project/mcclowes/eslint-plugin-absolute-import/branch/master)
[![npm](https://img.shields.io/npm/v/eslint-plugin-absolute-import.svg)](https://www.npmjs.com/package/eslint-plugin-absolute-import)
[![npm downloads](https://img.shields.io/npm/dt/eslint-plugin-absolute-import.svg?maxAge=2592000)](http://www.npmtrends.com/eslint-plugin-absolute-import)

This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names. All the goodness that the ES2015+ static module syntax intends to provide, marked up in your editor.

## Rules

### Static analysis

* Forbid import of modules using relative paths ([`no-relative-path`])
* Forbid unresolved imports ([`no-unresolved`])

[`no-absolute-path`]: ./docs/rules/no-absolute-path.md

## Installation

```sh
npm install eslint-plugin-absolute-import -g
```

or if you manage ESLint as a dev dependency:

```sh
# inside your project's working tree
npm install eslint-plugin-absolute-import --save-dev
```

All rules are off by default. 

Currently [Node] and [webpack] resolution have been implemented, but the
resolvers are just npm packages, so [third party packages are supported](https://github.com/mcclowes/eslint-plugin-absolute-import/wiki/Resolvers) (and encouraged!).

# Settings

You may set the following settings in your `.eslintrc`:

#### `import/extensions`

A list of file extensions that will be parsed as modules and inspected for
`export`s.

This defaults to `['.js']`, unless you are using the `react` shared config,
in which case it is specified as `['.js', '.jsx']`.

```js
"settings": {
  "import/resolver": {
    "node": {
      "extensions": [
        ".js",
        ".jsx"
      ]
    }
  }
}
```
