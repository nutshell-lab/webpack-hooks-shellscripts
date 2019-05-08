# webpack-hooks-shellscripts

[![Build Status](https://travis-ci.org/nutshell-lab/webpack-hooks-shellscripts.svg?branch=master)](https://travis-ci.org/nutshell-lab/webpack-hooks-shellscripts)
[![Maintainability](https://api.codeclimate.com/v1/badges/3a0e1bb6be50fc9c0d47/maintainability)](https://codeclimate.com/github/nutshell-lab/webpack-hooks-shellscripts/maintainability)
[![NPM version](https://badgen.net/npm/v/webpack-hooks-shellscripts)](https://www.npmjs.com/package/webpack-hooks-shellscripts)
[![NPM bundle size](https://badgen.net/bundlephobia/min/webpack-hooks-shellscripts)](https://bundlephobia.com/result?p=webpack-hooks-shellscripts)

> Just triggers some shellscripts on webpack compiler hooks.

## Install

```sh
yarn add -D webpack-hooks-shellscripts
```

## Usage

Add the plugin to your webpack config.

```js
// webpack.config.js
const hooksScriptPlugin = require('webpack-hooks-shellscripts')

module.exports = {
  plugins: [
    hooksScriptPlugin({
      beforeEmit: ['rm -r ./dist'],
      afterEmit: ['echo "Build succeeded"']
    })
  ]
}
```

## API

### hooksShellScriptsPlugin(bindings)

#### bindings

Type: `object`

Hooks/Scripts bindings.

```js
// example
{
  beforeRun: ['echo "do this"', 'echo "then that"'],
  beforeCompile: ['./do-something']
}
```

See https://webpack.js.org/api/compiler-hooks/ to get an exhaustive hooks list.

## License

MIT © [Nutshell](https://nutshell-lab.com)
