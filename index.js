'use strict';

var MarkdownIt = require('markdown-it');

exports.name = 'markdown-it';
exports.outputFormat = 'html';
exports.inputFormats = ['markdown-it', 'markdown', 'md'];
exports.render = function (str, options) {
  options = options || {};
  var md = MarkdownIt(options);

  // Parse the plugins.
  for (var i in options.plugins || {}) {
    if (typeof options.plugins[i] === 'string') {
      md.use(require(options.plugins[i]));
    }
    else {
      md.use(options.plugins[i]);
    }
  }

  // Render the markdown.
  if (options.inline) {
    return md.renderInline(str);
  }
  else {
    return md.render(str);
  }
};
