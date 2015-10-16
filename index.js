'use strict';

var MarkdownIt = require('markdown-it');

exports.name = 'markdown-it';
exports.outputFormat = 'html';
exports.inputFormats = ['markdown-it', 'markdown', 'md'];
exports.render = function (str, options) {
  options = options || {};
  var md = MarkdownIt(options);
  if (options.inline) {
    return md.renderInline(str);
  }
  else {
    return md.render(str);
  }
};
