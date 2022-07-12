import _ from 'lodash';
import parser from './parsers.js';

const buildTree = (filepath1, filepath2) => {
  const firstData = parser(filepath1);
  const secondData = parser(filepath2);

  const iter = (data1, data2) => {
    if (!_.isObject(data1)) {
      return `${data1}`;
    }

    if (!_.isObject(data2)) {
      return `${data2}`;
    }

    const firstKeys = Object.keys(data1);
    const secondKeys = Object.keys(data2);
    const keys = _.uniq([...firstKeys, ...secondKeys]);
    const sortedKeys = _.sortBy(keys);

    const result = sortedKeys.map((key) => {
      const value1 = data1[key];
      const value2 = data2[key];

      if (!secondKeys.includes(key)) {
        return { type: 'deleted', key, value: iter(data1[key], data1[key]) };
      }
      if (!firstKeys.includes(key)) {
        return { type: 'added', key, value: iter(data2[key], data2[key]) };
      }
      // здесь случай когда ключ общий
      if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
        return { type: 'nested', key, value: iter(data1[key], data2[key]) };
      }
      return value1 === value2 ? { type: 'same', key, value: value1 } : { type: 'different', key, value: [iter(value1, value1), iter(value2, value2)] };
    });
    // console.log(result);
    return { value: result };
  };
  const tree = iter(firstData, secondData);
  // console.log(`tree: ${JSON.stringify(tree)}`);
  return tree;
};

export default buildTree;
