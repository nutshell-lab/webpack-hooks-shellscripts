import execa from 'execa'
import pMapSeries from 'p-map-series'

const PLUGIN_NAME = 'HooksShellScriptsPlugin'

const execute = async script => {
  const { stdout, stderr } = await execa.shell(script)
  if (stdout) process.stdout.write(stdout)
  if (stderr) process.stderr.write(stderr)
}

const registerHook = compiler => ([hook, scripts]) =>
  compiler.hooks[hook].tap(PLUGIN_NAME, () => pMapSeries(scripts, execute))

/**
 * Bind some shell scripts to execute serially on webpack compiler hooks
 * @param {object} scripts Hooks scipts bindings
 * @returns {void}
 * @see https://webpack.js.org/api/compiler-hooks/
 * @example
 * ```javascript
 *  // webpack.config.js
 *  module.exports = {
 *    plugins: [
 *      hooksScriptPlugin({
 *        beforeEmit: ['rm -r ./dist'],
 *        afterEmit: ['echo "Build succeeded"']
 *      })
 *    ]
 *  }
 * ```
 */
export default (scripts = {}) => ({
  apply: compiler => Object.entries(scripts).map(registerHook(compiler))
})
