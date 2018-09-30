'use strict';

/**
 * `random`
 * Returns a random integer number from 1 to 100 or from min to max (min is non-inclusive).
 * @param {number} max - the maximum to be returned, should be an integer
 * @param {number} min - the minimum to be returned, should be an integer
 * @returns {number} Integer between min and max (inclusively)
 */
const random = (max, min) => {
  if (max === null || max === undefined) max = 100;
  if (min === null || min === undefined) min = 0;
  if (isNaN(max)) throw new Error('max is not a number');
  if (isNaN(min)) throw new Error('min is not a number');
  if (min > max) throw new Error('min cannot be greater than max');

  return Math.ceil(Math.random() * (max - min)) + min;
};

module.exports = random;
