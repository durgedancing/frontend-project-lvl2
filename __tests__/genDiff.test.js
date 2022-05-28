import genDiff from '../src/genDiff.js';
import getDataFromFile from '../src/getDataFromFile.js';

const filepath1 = __fixtures__/test1.json;
const filepath2 = __fixtures__/test2.json;
const filepath3 = __fixtures__/result;

// const data1 = getDataFromFile(filepath1); 
// const data2 = getDataFromFile(filepath2); 
const resultData = getDataFromFile(filepath3);

test('main', () => {
  const result = genDiff(filepath1, filepath2);
  expect(typeof result).toBe("string");
  expect(result).toEqual(resultData);
});
/* Сравниваются данные, а не строки файлов.
Две строчки дифа, отвечающие за различия поля, должны находиться рядом. Причём вначале должна выводиться строка относящаяся к первому файлу, а затем строка относящаяся ко второму файлу (см. пример с timeout).
Результатом работы функции genDiff() является строка.
*/