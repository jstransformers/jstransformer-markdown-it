'use strict';

var assert = require('assert');
var fs = require('fs');

var transform = require('../');

var input = fs.readFileSync(__dirname + '/input.md', 'utf8');
var expected = fs.readFileSync(__dirname + '/expected.html', 'utf8');

var output = transform.render(input);
fs.writeFileSync(__dirname + '/output.html', output);
assert(output === expected, 'output.html should equal expected.html');

console.log('test passed');
