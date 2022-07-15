import _ from 'lodash';
import { test, expect } from '@jest/globals';
import parser from '../src/parsers.js';

test('json', () => {
  const result = parser('filepath1.json');
  const boolean = _.isObject(result);
  expect(boolean).toBe(true);
  const keys = Object.keys(result);
  expect(keys.length).toBe(3);
});

test('yaml', () => {
  const result = parser('file1.yml');
  const boolean = _.isObject(result);
  expect(boolean).toBe(true);
  const keys = Object.keys(result);
  expect(keys.length).toBe(3);
});
