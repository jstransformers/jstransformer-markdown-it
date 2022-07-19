# jstransformer-markdown-it

[markdown-it](https://github.com/markdown-it/markdown-it) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-markdown-it/master.svg)](https://travis-ci.org/jstransformers/jstransformer-markdown-it)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-markdown-it/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-markdown-it)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-markdown-it/master.svg)](http://david-dm.org/jstransformers/jstransformer-markdown-it)
[![NPM version](https://img.shields.io/npm/v/jstransformer-markdown-it.svg)](https://www.npmjs.org/package/jstransformer-markdown-it)

## Installation

    npm install jstransformer-markdown-it

## API

```js
const md = require('jstransformer')(require('jstransformer-markdown-it'));

md.render('# Hello World!').body;
//=> '<h1>Hello World!</h1>'
```

What follows is a series of comparisons showing the differences between the API of markdown-it and jstransformer-markdown-it.

### Inline rendering

**markdown-it** supports rendering a Markdown string in an inline fashion (i.e. without wrapping `<p>`):

```js
const md = require('markdown-it')();
md.renderInline(src);
```

In **jstransformer-markdown-it**, this can be achieved through the `inline` option:

```js
const md = require('jstransformer')(require('jstransformer-markdown-it'));
md.render('**strong**').body;
//=> '<p><strong>strong</strong></p>\n'
md.render('**strong**', { inline: true }).body;
//=> '<strong>strong</strong>'
```

### Plugins

**markdown-it** applies plugins with the `.use` function:

```js
const md = require('markdown-it')();
md.use(require('plugin1'));
md.use(plugin2);
md.use(plugin3, opts, ...);
md.use(require('plugin4'), opts, ...);
```

**jstransformer-markdown-it** applies plugins through the `plugins` option:

```js
const md = require('jstransformer')(require('jstransformer-markdown-it'));

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

### Rules

**markdown-it** allows enabling and disabling specific rules through `md.disable` and `.enable` functions:

```js
const md = require('markdown-it')();
md.disable([ 'link', 'image' ]);
md.disable('backticks');
md.disable('might-not-exist', true);
md.enable('might-not-exist2', true);
```

In **jstransformer-markdown-it**, the same thing can be done with the `enable` and `disable` options, with slightly modified syntax:

```js
const md = require('jstransformer')(require('jstransformer-markdown-it'))

md.render(markdown, {
  disable: [
    'link',
    'image',
    'backticks',
    ['might-not-exist', true]
  ],
  enable: [
    ['might-not-exist2', true]
  ]
}).body;
```

## License

MIT
