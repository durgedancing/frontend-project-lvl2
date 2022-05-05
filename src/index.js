import path from 'path';
import _ from 'lodash';
import fs from 'fs';
import { cwd } from 'process';

export default (filepath1, filepath2) => {
  const currentDir = cwd();
  const fullPath1 = path.resolve(currentDir, filepath1);
  const fullPath2 = path.resolve(currentDir, filepath2);

  const JSONdata1 = fs.readFileSync(fullPath1, 'utf-8', (err, data) => {
    if (err) {
      console.log('error!');
    }
    return data;
  });
  const JSONdata2 = fs.readFileSync(fullPath2, 'utf-8', (err, data) => {
    if (err) {
      console.log('error!');
    }
    return data;
  });
  const data1 = JSON.parse(JSONdata1);
  const data2 = JSON.parse(JSONdata2);
  // !спросить у ромы про мутации
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
}