import { test, expect } from '@jest/globals';
import genDiff from '../src/genDiff.js';
import getDataFromFile from '../src/getDataFromFile.js';

const filepath1 = '__fixtures__/test1.json';
const filepath2 = '__fixtures__/test2.json';
const filepathToResult1 = '__fixtures__/resultMain.txt';
const filepath3 = '__fixtures__/test3.json';
const filepathToResult2 = '__fixtures__/resultForSecondTest.txt';
const filepathToResult3 = '__fixtures__/resultForThirdTest.txt';

test('main', () => {
  const result = genDiff(filepath1, filepath2);
  const resultData = getDataFromFile(filepathToResult1);
  expect(typeof result).toBe('string');
  expect(result).toEqual(resultData);
});

test('empty files 1', () => {
  const result = genDiff(filepath1, filepath3);
  const resultData = getDataFromFile(filepathToResult2);
  expect(result).toEqual(resultData);
});

test('empty files 2', () => {
  const result = genDiff(filepath3, filepath1);
  const resultData = getDataFromFile(filepathToResult3);
  expect(result).toEqual(resultData);
});
