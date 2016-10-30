var calc = require('../lib/calc');
var assert = require('assert');

assert.equal(calc.add(1,1),2);
assert.equal(calc.subtract(1,1),0);
assert.equal(calc.multiply(1,1),1);
assert.equal(calc.devide(1,1),1);

