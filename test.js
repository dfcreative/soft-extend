var assert = require('assert');
var se = require('./');

var a = {x: 1, y: {x: 2, y:3}};
assert.deepEqual(se(a, {x:2, y:5, z:3}), {x:1, y: {x:2, y:3}, z:3});

assert.throws(function(){
	se(123,45);
});