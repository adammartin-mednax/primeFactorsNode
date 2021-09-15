const primeFactors = require('../src/primeFactors');

test('prime factors of 1 is none', () => {
  expect(primeFactors(1)).toStrictEqual([]);
});

test('prime factors of 2 is 2', () => {
  expect(primeFactors(2)).toStrictEqual([2]);
});

test('prime factors of 3 is 3', () => {
  expect(primeFactors(3)).toStrictEqual([3]);
});