const assert = require('assert');
const calculateNumber = require('./0-calcul.js');
describe('calculateNumber', () => {
  it("Checking floating whole numbers", () => {
    assert.strictEqual(calculateNumber(3.0, 4.0), 7);
  });

  it("Checking rounding up numbers", () => {
    assert.strictEqual(calculateNumber(2.5, 3.709), 7);
  });

  it("Checking rounding up numbers less than *.5", () => {
    assert.strictEqual(calculateNumber(2.4, 5.24), 7);
  });

  it("Checking whole numbers", () => {
    assert.strictEqual(calculateNumber(3, 4), 7);
  });

  it("Checking negative numbers", () => {
    assert.strictEqual(calculateNumber(-1.3, -4.2), -5);
  });

  it("Checking both negative and positive numbers", () => {
    assert.strictEqual(calculateNumber(-40, 50), 10);
  });

});
