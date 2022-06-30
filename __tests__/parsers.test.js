import _ from 'lodash';
import { test, expect } from '@jest/globals';
import parser from '../src/parsers.js';

test('json', () => {
  const result = parser('nested1.json');
  const boolean = _.isObject(result);
  expect(boolean).toBe(true);
  const keys = Object.keys(result);
  expect(keys.length).toBe(3);
  const result0 = parser('emptyJSON.json');
  expect(Object.keys(result0)).toStrictEqual([]);
});

test('yaml', () => {
  const result = parser('nested1.yml');
  const boolean = _.isObject(result);
  expect(boolean).toBe(true);
  const keys = Object.keys(result);
  expect(keys.length).toBe(3);
  const result0 = parser('emptyYML.yml');
  expect(Object.keys(result0)).toStrictEqual([]);
});