const assertEqual = require('../assertEqual');
const tail = require('../tail');
const chai = require('chai');
const assert = chai.assert;

//test code
// Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] if the input is ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const actual = tail(["Yo Yo", "Lighthouse", "Labs"]);
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(actual, expected);
  });

  it("returns [2, 3] if the input is [1, 2, 3]", () => {
    const actual = tail([1, 2, 3]);
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });

  it("returns [] if the input is []", () => {
    const actual = tail([]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it("returns [2] if the input is [1, 2]", () => {
    const actual = tail([1, 2]);
    const expected = [2];
    assert.deepEqual(actual, expected);
  });


});