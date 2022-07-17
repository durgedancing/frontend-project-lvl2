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

test('yaml/yml', () => {
  const resultYML = parser('file1.yml');
  const resultYAML = parser('file1.yaml');
  const booleanYML = _.isObject(resultYML);
  const booleanYAML = _.isObject(resultYAML);
  expect(booleanYML).toBe(true);
  expect(booleanYAML).toBe(true);
  const keysYML = Object.keys(resultYML);
  const keysYAML = Object.keys(resultYAML);
  expect(keysYML.length).toBe(3);
  expect(keysYML.length).toEqual(keysYAML.length);
});

test('falsy', () => {
  // parser('test1.json');
  expect(() => parser('test1.json')).toThrow();
  expect(() => parser('test1.yml')).toThrow();
  expect(() => parser('test1.yaml')).toThrow();
  expect(() => parser('test1.txt')).toThrow();
  expect(() => parser('file1.js')).toThrow();
});
