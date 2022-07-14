import { test, expect } from '@jest/globals';
import genDiff from '../src/genDiff.js';
import parser from '../src/parsers.js';

test('main (stylish)', () => {
  const result = genDiff('filepath1.json', 'filepath2.json');
  const resultData = parser('mainResult.txt');
  expect(typeof result).toBe('string');
  expect(result).toEqual(resultData);
});

test('main plain', () => {
  const result = genDiff('filepath1.json', 'filepath2.json', 'plain');
  const resultData = parser('plainResult.txt');
  expect(typeof result).toBe('string');
  expect(result).toEqual(resultData);
});

test('main json', () => {
  const result = genDiff('filepath1.json', 'filepath2.json', 'json');
  const resultData = parser('jsonResult.json');
  console.log(`result: ${result}\nexpected: ${resultData}`);
  expect(result).toEqual(resultData);
});

/* test('second file empty', () => {
  const result = genDiff('filepath1.json', 'emptyJSON.json');
  const resultData = parser('secondFileEmptyTest.txt');
  expect(result).toEqual(resultData);
});

test('first file empty', () => {
  const result = genDiff('emptyJSON.json', 'filepath2.json');
  const resultData = parser('firstFileEmptyTest.txt');
  expect(result).toEqual(resultData);
}); */
