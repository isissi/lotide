const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const chai = require('chai');
const assert = chai.assert;

//test code
describe("#middle", () => {
  it("returns [] if the input is [1]]", () => {
    const actual = middle([1]);
    const expected = [];
    assertArraysEqual(actual, expected);
  });

  it("returns [] if the input is [1, 2]]", () => {
    const actual = middle([1, 2]);
    const expected = [];
    assertArraysEqual(actual, expected);
  });

  it("returns [2] if the input is [1, 2, 3]]", () => {
    const actual = middle([1, 2, 3]);
    const expected = [2];
    assertArraysEqual(actual, expected);
  });

  it("returns [2, 3] if the input is [1, 2, 3, 4]]", () => {
    const actual = middle([1, 2, 3, 4]);
    const expected = [2, 3];
    assertArraysEqual(actual, expected);
  });
});