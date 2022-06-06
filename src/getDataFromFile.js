import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', filename); // здесь было еще  '__fixtures__' но оно дублировалось

export default (filepath) => {
  const path = getFixturePath(filepath);

  const resultData = fs.readFileSync(path, 'utf-8', (err, data) => {
    if (err) {
      console.log('error!');
    }
    return data;
  });
  return resultData;
};
