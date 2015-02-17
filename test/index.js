'use strict';

var assert = require('assert');
var fs = require('fs');

var transform = require('../');

var failed = false;

function assertEqual(output, expected) {
  console.log('\tOutput:  ', JSON.stringify(output));
  console.log('\tExpected:', JSON.stringify(expected));
  if (output !== expected) {
    console.log('\tFAILED');
    failed = true;
  } else {
    console.log('\tPASSED');
  }
}

var input = fs.readFileSync(__dirname + '/input.md', 'utf8');
var expected = fs.readFileSync(__dirname + '/expected.html', 'utf8');

var output = transform.render(input);
fs.writeFileSync(__dirname + '/output.html', output);
assertEqual(output, expected);

console.log('test passed');
