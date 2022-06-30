import { test, expect } from '@jest/globals';
import genDiff from '../src/genDiff.js';
import parser from '../src/parsers.js';

test('main', () => {
  const result = genDiff('nested1.json', 'nested2.json');
  const resultData = parser('main.txt');
  expect(typeof result).toBe('string');
  expect(result).toEqual(resultData);
});

test('second file empty', () => {
  const result = genDiff('nested1.json', 'emptyJSON.json');
  const resultData = parser('secondFileEmpty.txt');
  expect(result).toEqual(resultData);
});

test('first file empty', () => {
  const result = genDiff('emptyJSON.json', 'nested1.json');
  const resultData = parser('firstFileEmpty.txt');
  expect(result).toEqual(resultData);
});
