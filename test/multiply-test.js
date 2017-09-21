'use strict';

const { assert } = require('chai');
const { multiply } = require('../lib/multiply');

describe('multiply', () => {
    it('should be a function', () => {
      assert.isFunction(multiply);
    });
    it('should return a number', () => {
      assert.isNumber(multiply(2, 3));
    });
    it('should multiply the numbers', () => {
      assert.equal(multiply(2, 3), 6);
    });
});