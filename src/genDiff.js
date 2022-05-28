import _ from 'lodash';
import getDataFromFile from './getDataFromFile';

export default (filepath1, filepath2) => {
  const JSONdata1 = getDataFromFile(filepath1);
  const JSONdata2 = getDataFromFile(filepath2);

  const data1 = JSON.parse(JSONdata1);
  const data2 = JSON.parse(JSONdata2);

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
  };
  const resultString = `{\n${result.map((line) => `  ${line}`).join('\n')}\n}`;
  console.log(resultString);
  return resultString;
};
