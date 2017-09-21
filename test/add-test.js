'use strict';

const { assert } = require('chai');
const { add } = require('../lib/add.js');


describe('add', () => {
    it('should be a function', () => {
      assert.isFunction(add);
    });
    it('should return a number', () => {
      assert.isNumber(add(2, 3));
    });
    it('should add the numbers', () => {
      assert.equal(add(2,3), 5);
    });
});