import { test, expect } from '@jest/globals';
import genDiff from '../src/genDiff.js';
import parser from '../src/parsers.js';

test('json main', () => {
  const result = genDiff('test1.json', 'test2.json');
  const resultData = parser('resultMain.txt');
  expect(typeof result).toBe('string');
  expect(result).toEqual(resultData);
});

test('empty json files 1', () => {
  const result = genDiff('test1.json', 'test3.json');
  const resultData = parser('resultForSecondTest.txt');
  expect(result).toEqual(resultData);
});

test('empty json files 2', () => {
  const result = genDiff('test3.json', 'test1.json');
  const resultData = parser('resultForThirdTest.txt');
  expect(result).toEqual(resultData);
});

test('yaml main', () => {
  const result = genDiff('test1.yml', 'test2.yml');
  const resultData = parser('resultMain.txt');
  console.log(result, resultData);
  expect(result).toEqual(resultData);
});

test('empty yaml files 1', () => {
  const result = genDiff('test1.yml', 'test3.yml');
  const resultData = parser('resultForSecondTest.txt');
  console.log(result, resultData);
  expect(result).toEqual(resultData);
});

test('empty yaml files 2', () => {
  const result = genDiff('test3.yml', 'test1.yml');
  const resultData = parser('resultForThirdTest.txt');
  console.log(result, resultData);
  expect(result).toEqual(resultData);
});