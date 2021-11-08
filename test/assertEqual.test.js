const chai = require('chai');
const assert = chai.assert;
const assertEqual = require("../assertEqual");

//test code
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
describe("#assertEqual", () => {
  it("returns fasle if the input is 'Lighthouse Labs' and 'Bootcamp'", () => {
    const result = assertEqual("Lighthouse Labs", "Bootcamp");
    assert.isFalse(result);
  });

  it("returns true if the input is 1 and 1", () => {
    const result = assertEqual(1, 1);
    assert.isTrue(result);
  });
});
