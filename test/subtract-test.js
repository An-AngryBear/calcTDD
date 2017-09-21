'use strict';

const { assert } = require('chai');
const { subtract } = require('../lib/subtract');

describe('subtract', () => {
    it('should be a function', () => {
      assert.isFunction(subtract);
    });
    it('should return a number', () => {
      assert.isNumber(subtract(2, 3));
    });
    it('should subtract the numbers', () => {
      assert.equal(subtract(3, 2), 1);
    });
});