'use strict';

const { assert } = require('chai');
const { divide } = require('../lib/divide');

describe('divide', () => {
    it('should be a function', () => {
      assert.isFunction(divide);
    });
    it('should return a number', () => {
      assert.isNumber(divide(2, 3));
    });
    it('should divide the numbers', () => {
      assert.equal(divide(4, 2), 2);
    });
});