import buildTree from './buildTree.js';
import stylish from '../formatters/stylish.js';
import plain from '../formatters/plain.js';
import json from '../formatters/json.js';

const genDiff = (filepath1, filepath2, style = 'stylish') => {
  let tree = buildTree(filepath1, filepath2);
  switch (style) {
    case 'plain':
      tree = plain(tree);
      break;
    case 'stylish':
      tree = stylish(tree);
      break;
    case 'json':
      tree = json(tree);
      break;
    default:
      break;
  }
  console.log(tree);
  return tree;
};

export default genDiff;
