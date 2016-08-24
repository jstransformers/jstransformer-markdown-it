'use strict';

var MarkdownIt = require('markdown-it');

exports.name = 'markdown-it';
exports.outputFormat = 'html';
exports.inputFormats = ['markdown-it', 'markdown', 'md'];
exports.render = function (str, options) {
  options = options || {};
  var md = MarkdownIt(options);

  // Parse the plugins.
  (options.plugins || []).forEach(function (plugin) {
    if (!Array.isArray(plugin)) {
      plugin = [plugin];
    }

    if (typeof plugin[0] === 'string') {
      plugin[0] = require(plugin[0]);
    }

    md.use.apply(md, plugin);
  });

  // Render the markdown.
  if (options.inline) {
    return md.renderInline(str);
  }
  else {
    return md.render(str);
  }
};
