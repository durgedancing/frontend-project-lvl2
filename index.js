import buildTree from './src/buildTree.js';
import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';
import json from './formatters/json.js';

const genDiff = (filepath1, filepath2, style = 'stylish') => {
  const tree = buildTree(filepath1, filepath2);
  switch (style) {
    case 'plain':
      // console.log(plain(tree));
      return plain(tree);
    case 'stylish':
      // console.log(stylish(tree));
      return stylish(tree);
    case 'json':
      // console.log(json(tree));
      return json(tree);
    default:
      throw new Error('ошибка в чтении стиля');
  }
};

export default genDiff;
