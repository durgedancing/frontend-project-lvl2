import { test, expect } from '@jest/globals';
import parser from '../src/parsers.js';

test('json', () => {
  const result = parser('test1.json');
  expect(result['host']).toBe('hexlet.io');
  const result0 = parser('test3.json');
  expect(Object.keys(result0)).toStrictEqual([]);
});

test('yaml', () => {
  const result = parser('test1.yml');
  expect(result['host']).toBe('hexlet.io');
  const result0 = parser('test3.yml');
  expect(Object.keys(result0)).toStrictEqual([]);
});
