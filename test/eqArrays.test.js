const eqArrays = require('../eqArrays');
const chai = require('chai');
const assert = chai.assert;

//test code
describe("#assertEqual", () => {
  it("returns true if the input is [1, 2, 3] and [1, 2, 3]", () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.isTrue(result);
  });

  it("returns true if the input is ['1', '2', '3'] and ['1', '2', '3']", () => {
    const result = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    assert.isTrue(result);
  });

  it("returns false if the input is ['1', '2', '3'] and ['1', '2', 3]", () => {
    const result = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    assert.isFalse(result);
  });
});