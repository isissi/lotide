const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

//test code
middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3, 4]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);