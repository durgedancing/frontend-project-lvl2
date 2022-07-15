import buildTree from './src/buildTree.js';
import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';
import json from './formatters/json.js';

const genDiff = (filepath1, filepath2, style = 'stylish') => {
  const tree = buildTree(filepath1, filepath2);
  switch (style) {
    case 'plain':
      return plain(tree);
    case 'stylish':
      return stylish(tree);
    case 'json':
      return json(tree);
    default:
      break;
  }
  console.log(tree);
  return tree;
};

export default genDiff;
