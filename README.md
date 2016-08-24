# jstransformer-markdown-it

[markdown-it](https://github.com/markdown-it/markdown-it) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-markdown-it/master.svg)](https://travis-ci.org/jstransformers/jstransformer-markdown-it)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-markdown-it/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-markdown-it?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-markdown-it/master.svg)](http://david-dm.org/jstransformers/jstransformer-markdown-it)
[![NPM version](https://img.shields.io/npm/v/jstransformer-markdown-it.svg)](https://www.npmjs.org/package/jstransformer-markdown-it)

## Installation

    npm install jstransformer-markdown-it

## API

```js
var md = require('jstransformer')(require('jstransformer-markdown-it'));

md.render('# Hello World!').body;
//=> '<h1>Hello World!</h1>'
```

### Plugins

Plugins in markdown-it are applied with the `.use` function:

```js
var md = require('markdown-it')();
md.use(require('plugin1'));
md.use(plugin2);
md.use(plugin3, opts, ...);
md.use(require('plugin4'), opts, ...);
```

jstransformer-markdown-it allows doing the same through the `plugins` option:

```js
var md = require('jstransformer')(require('jstransformer-markdown-it'));

md.render(markdown, {
  plugins: [
    'plugin1',
    plugin2,
    [plugin3, opts, ...],
    ['plugin4', opts, ...]
  ]
}).body;
```

If an element of the `plugins` array is a string, it is `require`d. If an element is an array, the first element will represent the plugin, while the rest are treated as options to that plugin.

## License

MIT
