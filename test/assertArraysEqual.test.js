const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const chai = require('chai');
const assert = chai.assert;

//test code
describe("assertArraysEqual", () => {
  it("returns true if the arguments are [1, 2, 3] and [1, 2, 3]", () => {
    const actual = assertArraysEqual([1, 2, 3], [1, 2, 3]);
    assert.isTrue(actual);
  });

  it("returns false if the arguments are [1, 2, 3] and [3, 2, 3]", () => {
    const actual = assertArraysEqual([1, 2, 3], [3, 2, 3]);
    assert.isFalse(actual);
  });

  it("returns false if the arguments are not the same type", () => {
    const actual = assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
    assert.isFalse(actual);
  });

  it("returns true if the arguments are the same type", () => {
    const actual = assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
    assert.isTrue(actual);
  });
});
