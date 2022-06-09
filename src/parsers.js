import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import yaml from 'js-yaml';
// yaml.load?

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename); // здесь было еще  '__fixtures__' но оно дублировалось
const takeFormat = (name) => {
  const extname = path.extname(name);
  const format = extname.slice(1);
  return format;
}

export default (filepath) => {
  const format = takeFormat(filepath);
  const path = getFixturePath(filepath);

  const data = fs.readFileSync(path, 'utf-8', (err, text) => {
    if (err) {
      console.log('error!');
    }
    return text;
  });

  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
      return yaml.load(data);
    case 'yaml':
      return yaml.load(data);
    case 'txt':
      return data;
  };
};
