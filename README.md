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
var md = require('jstransformer')(require('jstransformer-markdown-it'))

md.render('# Hello World!').body
//=> '<h1>Hello World!</h1>'
```

## License

MIT
