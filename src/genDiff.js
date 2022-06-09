import _ from 'lodash';
import parser from './parsers.js';

export default (filepath1, filepath2) => {
  const data1 = parser(filepath1);
  const data2 = parser(filepath2);

  const firstKeys = Object.keys(data1);
  const secondKeys = Object.keys(data2);
  const keys = _.uniq([...firstKeys, ...secondKeys]);
  let result = [];

  for (const key of _.sortBy(keys)) {
    if (firstKeys.includes(key) && secondKeys.includes(key)) {
      if (data1[key] === data2[key]) {
        result = [...result, `  ${key} : ${data1[key]}`];
      } else {
        result = [...result, `- ${key} : ${data1[key]}`];
        result = [...result, `+ ${key} : ${data2[key]}`];
      }
    } else if (firstKeys.includes(key) && !secondKeys.includes(key)) {
      result = [...result, `- ${key} : ${data1[key]}`];
    } else if (!firstKeys.includes(key) && secondKeys.includes(key)) {
      result = [...result, `+ ${key} : ${data2[key]}`];
    }
  }
  const resultString = `{\n${result.map((line) => `  ${line}`).join('\n')}\n}`;
  console.log(resultString);
  return resultString;
};
