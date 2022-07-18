import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import yaml from 'js-yaml';
// yaml.load?

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => {
  // console.log(`__dirname: ${__dirname}`);
  // console.log(`filename: ${filename}`);
  // const result = path.join(__dirname, '..', '__fixtures__', filename);
  const result1 = path.resolve(__dirname, '..', '__fixtures__', filename);
  // console.log(`join: ${result}`);
  // console.log(`resolve: ${result1}`);
  return result1;
};
// функция не работает на абсолютный путь

const takeFormat = (name) => {
  const extname = path.extname(name);
  const format = extname.slice(1);
  return format;
};

export default (filepath) => {
  const format = takeFormat(filepath);
  const currentPath = getFixturePath(filepath);

  try {
    const data = fs.readFileSync(currentPath, 'utf-8');
    switch (format) {
      case 'json':
        return JSON.parse(data);
      case 'yml':
        return yaml.load(data);
      case 'yaml':
        return yaml.load(data);
      case 'txt':
        return data;
      default:
        throw new Error('ошибка парсинга');
    }
  } catch (e) {
    throw new Error(`ошибка чтения файла, проверить путь: ${currentPath}`);
  }
};
