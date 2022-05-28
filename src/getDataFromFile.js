// import path from 'path';
import _ from 'lodash';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, path } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

export default (filepath) => {
  const path = getFixturePath(filepath);

  const data =  fs.readFileSync(path, 'utf-8', (err, data) => {
    if (err) {
      console.log('error!');
    }
    return data;
  });
  return data;
};
