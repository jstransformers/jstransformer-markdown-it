'use strict'

const markdownIt = require('markdown-it')

exports.name = 'markdown-it'
exports.outputFormat = 'html'
exports.inputFormats = ['markdown-it', 'markdown', 'md']

exports.render = function (str, options) {
  options = Object.assign({}, options || {})

  // Copy render rules from options, and remove them from options, since
  // they're invalid.
  const renderRules = Object.assign({}, options.renderRules || {})
  delete options.renderRules

  const md = markdownIt(options)

  // Enable render rules.
  Object.assign(md.renderer.rules, renderRules);

  // Parse the plugins.
  (options.plugins || []).forEach(plugin => {
    if (!Array.isArray(plugin)) {
      plugin = [plugin]
    }

    if (typeof plugin[0] === 'string') {
      // eslint-disable-next-line import/no-dynamic-require
      plugin[0] = require(plugin[0])
    }

    md.use.apply(md, plugin)
  });

  // Parse enable/disable rules.
  (options.enable || []).forEach(rule => {
    md.enable.apply(md, Array.isArray(rule) ? rule : [rule])
  });

  (options.disable || []).forEach(rule => {
    md.disable.apply(md, Array.isArray(rule) ? rule : [rule])
  })

  // Render the markdown.
  if (options.inline) {
    return md.renderInline(str)
  }
  return md.render(str)
}
