const random = require('../index');

test('random (1,3) returns a number less than equal to 3', () => {
  const min = 1;
  const max = 3;

  const result = random(max, min);
  expect(result<=3).toBe(true);
});

test('random (3,1) returns error min cannot be greater than max', () => {
  const min = 3;
  const max = 1;

  expect(() => random(max, min)).toThrowError('min cannot be greater than max');
});

test('random (1,1) returns 1', () => {
  const min = 1;
  const max = 1;

  const result = random(max, min);
  expect(result).toBe(1);
});


test('random (-3,-1) returns a number between -3 and -1', () => {
  const min = -3;
  const max = -1;

  const result = random(max, min);
  expect(result>=-3).toBe(true);
  expect(result<=-1).toBe(true);
});


test('random (1,i) returns error max is not a number', () => {
  const min = 1;
  const max = 'i';

  expect(() => random(max, min)).toThrowError('max is not a number');
});


test('random (i,1) returns error min is not a number', () => {
  const min = 'i';
  const max = 1;

  expect(() => random(max, min)).toThrowError('min is not a number');
});


test('random (3) returns 1, 2 or 3', () => {
  const max = 3;

  const result = random(max);
  expect(result>=1).toBe(true);
  expect(result<=3).toBe(true);
});


test('random (-3) returns min cannot be greater than max (implicit imn of 0)', () => {
  const max = -3;

  expect(() => random(max)).toThrowError('min cannot be greater than max');
});