# webpack-hooks-shellscripts

[![Build Status](https://travis-ci.org/nutshell-lab/webpack-hooks-shellscripts.svg?branch=master)](https://travis-ci.org/nutshell-lab/webpack-hooks-shellscripts)
[![Maintainability](https://api.codeclimate.com/v1/badges/3a0e1bb6be50fc9c0d47/maintainability)](https://codeclimate.com/github/nutshell-lab/webpack-hooks-shellscripts/maintainability)
[![NPM bundle size](https://img.shields.io/bundlephobia/min/@nutshelllab/webpack-hooks-shellscripts.svg)](http://bundlephobia.com/result?p=@nutshelllab/webpack-hooks-shellscripts@1.0.0)

> Just triggers some shellscripts on webpack compiler hooks.

## Install

```sh
yarn add -D @nutshelllab/webpack-hooks-shellscripts
```

## Usage

Add the plugin to your webpack config.

```js
// webpack.config.js
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
