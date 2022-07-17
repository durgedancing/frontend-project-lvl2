import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import yaml from 'js-yaml';
// yaml.load?

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
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
    throw Error('ошибка чтения файла, проверить путь');
  }
};
